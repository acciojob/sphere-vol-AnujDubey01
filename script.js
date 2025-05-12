function volume_sphere() {
    //Write your code here
	let rad = parseFloat(document.getElementById('radius').value);
	let vol = document.getElementById('volume');

	if (isNaN(rad) || rad<0 ){
		vol.value = 'NaN';

		return ;
	}
	let volume = (4 / 3) * Math.PI * Math.pow(rad, 3);
	vol.value  = volume.toFixed(4);
	
	
};

document.getElementById('MyForm').onsubmit = volume_sphere;