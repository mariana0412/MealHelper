from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ObjectDoesNotExist
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

from accounts.models import MealsHelperUser, Product


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = MealsHelperUser
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name', 'phone_number', 'avatar')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = MealsHelperUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone_number=validated_data.get('phone_number'),
            avatar=validated_data.get('avatar'),
        )

        return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        # Add custom claims
        token['username'] = user.username
        return token


class AddProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'description', 'photo')
        extra_kwargs = {
            'name': {'required': True},
            'description': {'required': False},
            'photo': {'required': False},
        }

    def validate_name(self, value):
        user = self.context['request'].user
        if user.products.filter(name=value).exists():
            raise serializers.ValidationError({"name": "This user already has this product."})
        return value

    def create(self, validated_data):
        user = self.context['request'].user

        product = Product.objects.create(
            name=validated_data['name'],
            description=validated_data.get('description'),
            photo=validated_data.get('photo'),
        )
        user.products.add(product)
        # TODO: think about whether to save product with the same name or even all attributes in db (now I am doing so)

        return product
