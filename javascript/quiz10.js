const weight = prompt ('Enter your weight in kg');
const height = prompt ('Enter your height in meter');

if (weight && height) {
    const bmi = Number(weight) / Number(height) ** 2;
    
    console.log(weight, height, bmi)

    if(bmi < 18.5) {
        alert('under weight')
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        alert('normal')
    } else if(bmi >=25 && bmi <= 29.9) {
        alert('over weight')
    } else if(bmi >=30 && bmi <= 34.9) {
        alert('obesity (class I)')
    } else if(bmi >= 35 && bmi <= 39.9) {
        alert('obesity (class II)')
    } else if(bmi > 40) {
        alert('extreme obesity')
    }

} else {
    alert ('Please enter weight and height properly!')
}
