from rest_framework import serializers
from accounts.models import Product


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
