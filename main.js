var data = [];

Papa.parse('results.csv', {
	download: true,
	complete: function(results) {
		data = results.data;
		let winner = data[0][1];
		let flagWinner = "<img src='./images/" + winner.substring(winner.indexOf('(') + 1, winner.indexOf(')')).toLowerCase() + ".svg' class='flag' /> ";
		document.getElementById('winner').innerHTML = flagWinner + winner.substring(0, winner.indexOf('('));

		let climber = data[0][2];
		let flagClimber = "<img src='./images/" + climber.substring(climber.indexOf('(') + 1, climber.indexOf(')')).toLowerCase() + ".svg' class='flag' /> ";
		document.getElementById('climber').innerHTML = flagClimber + climber.substring(0, climber.indexOf('('));

		let sprinter = data[0][3];
		let flagSprinter = "<img src='./images/" + sprinter.substring(sprinter.indexOf('(') + 1, sprinter.indexOf(')')).toLowerCase() + ".svg' class='flag' /> ";
		document.getElementById('sprinter').innerHTML = flagSprinter + sprinter.substring(0, sprinter.indexOf('('));
	}
});

function displayInfo() {
	let year = document.getElementsByTagName('input')[0].value;
	if ((year < 1000) || (year == '')) {
		return;
	}
	else if (year < 1903) {
		alert("La première édition du Tour de France a eu lieu en 1903");
		/*
		document.getElementById('error').innerHTML = "<p>La première édition du Tour de France a eu lieu en 1903</p>";
		document.getElementById('palmares').style.visibility = 'hidden';
		*/
	}
	else if (year > 2017) {
		alert("Nom de Zeus, Marty !");
		/*
		document.getElementById('error').innerHTML = "<p>Nom de Zeus, Marty !</p>";
		document.getElementById('palmares').style.visibility = 'hidden';
		*/
	}
	else if (((year >= 1915) && (year <= 1918)) || ((year >= 1940) && (year <= 1946))) {
		alert("Le Tour de France n'a pas eu lieu en " + year);
		/*
		document.getElementById('error').innerHTML = "<p>Le Tour de France n'a pas eu lieu en " + year + "</p>";
		document.getElementById('palmares').style.visibility = 'hidden';
		*/
	}
	else {
		document.getElementById('error').innerHTML = "";
		for (let i = 0; i < data.length; i++) {
			if (data[i][0] == year) {
				let winner = data[i][1];
				let flagWinner = "<img src='./images/" + winner.substring(winner.indexOf('(') + 1, winner.indexOf(')')).toLowerCase() + ".svg' class='flag' /> ";
				document.getElementById('winner').innerHTML = flagWinner + winner.substring(0, winner.indexOf('('));

				let climber = data[i][2];
				if (climber == "") {
					climber = "<i>Pas avant 1933</i>";
					document.getElementById('climber').innerHTML = climber;
				}
				else {
					let flagClimber = "<img src='./images/" + climber.substring(climber.indexOf('(') + 1, climber.indexOf(')')).toLowerCase() + ".svg' class='flag' /> ";
					document.getElementById('climber').innerHTML = flagClimber + climber.substring(0, climber.indexOf('('));
				}

				let sprinter = data[i][3];
				if (sprinter == "") {
					sprinter = "<i>Pas avant 1953</i>";
					document.getElementById('sprinter').innerHTML = sprinter;
				}
				else {
					let flagSprinter = "<img src='./images/" + sprinter.substring(sprinter.indexOf('(') + 1, sprinter.indexOf(')')).toLowerCase() + ".svg' class='flag' /> ";
					document.getElementById('sprinter').innerHTML = flagSprinter + sprinter.substring(0, sprinter.indexOf('('));
				}

				break;
			}
		}
		document.getElementById('palmares').style.visibility = 'visible';
	}


}
