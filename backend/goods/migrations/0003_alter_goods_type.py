# Generated by Django 3.2 on 2023-06-02 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods',
            name='type',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Тип аксессуара'),
        ),
    ]
