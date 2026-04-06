from django.db import models

class Ingredient(models.Model):
    name = models.CharField(max_length=255)
    quantity = models.FloatField()
    unit = models.CharField(max_length=50)
    nutritional_value = models.JSONField()

    def __str__(self):
        return self.name

class Analysis(models.Model):
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    analysis_date = models.DateTimeField()
    result = models.TextField()
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'Analysis of {self.ingredient.name} on {self.analysis_date}'