

export default function play() {
	const name = "Alan"
	const age = 35

	function logPersonInfo(personName: string, personAge: number) {
		//const info = "Name: " + personName + ", age: " + personAge
		const info = `Name: ${personName}, age: ${personAge}`
		console.log(info)
		return info
	}

	logPersonInfo(name, age)
}