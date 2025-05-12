function volume_sphere() {
    //Write your code here
	let rad = parseFloat(document.getElementById('radius').value);
let volumeField = document.getElementById('volume');

	if (isNaN(rad) || rad < 0) {
		volumeField.value = 'NaN';
		return;
	}

	let volume = (4 / 3) * Math.PI * Math.pow(rad, 3);
	volumeField.value = volume.toFixed(4); // rounding to 4 decimal places
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
