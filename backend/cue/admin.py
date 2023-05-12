from django.contrib import admin

from .models import Cue, Image


class PostImageAdmin(admin.StackedInline):
    model = Image


class CueAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'title',
        'composition',
        'structure',
        'workshop',
        'weight',
        'article',
        'price',
        'play'
    )
    inlines = [PostImageAdmin]
    ordering = ('title', )
    search_fields = ('title', 'price', 'article')
    list_filter = ('title', 'price', 'article', 'composition')


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    pass


admin.site.register(Cue, CueAdmin)
