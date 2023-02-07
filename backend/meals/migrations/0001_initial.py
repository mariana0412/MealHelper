# Generated by Django 4.1.2 on 2023-02-04 13:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Meal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('category', models.CharField(blank=True, max_length=40, null=True)),
                ('recipe', models.CharField(blank=True, max_length=2000, null=True)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='media/mealsPhotos')),
            ],
        ),
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('product_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='accounts.product')),
                ('measure', models.CharField(max_length=40)),
                ('meal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='meals.meal')),
            ],
            bases=('accounts.product',),
        ),
    ]