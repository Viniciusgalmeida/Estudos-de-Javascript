# Check this kata on [Codewars](https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript)

### Description:

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

### Solution:

```
function bmi(weight, height) {
  let result = weight / height**2;
  if (result <= 18.5) {
    return "Underweight";
  }
  if (result <= 25.0) {
    return "Normal";
  }
  if (result <= 30.0) {
    return "Overweight";
  }
  if (result > 30) {
    return "Obese";
  }
}
```
