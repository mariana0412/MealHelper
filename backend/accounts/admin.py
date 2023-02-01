from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from accounts.models import MealsHelperUser, Product


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'photo')


class MealsHelperUserAdmin(UserAdmin):
    model = MealsHelperUser
    fieldsets = (
        *UserAdmin.fieldsets,
        (
            'Other Personal info',
            {
                'fields': (
                    'phone_number', 'avatar', 'products'
                )
            }
        )
    )


admin.site.register(Product, ProductAdmin)
admin.site.register(MealsHelperUser, MealsHelperUserAdmin)
