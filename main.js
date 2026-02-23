let temperature = 26;

switch (temperature) {
    case (temperature < 0):
        console.log("ყინავს!");
        break;

    case (temperature >= 0 && temperature <= 10):
        console.log("ძალიან ცივა");
        break;

    case (temperature >= 11 && temperature <= 20):
        console.log("ცივა");
        break;

    case (temperature >= 21 && temperature <= 30):
        console.log("თბილა");
        break;

    case (temperature > 30):
        console.log("ცხელა!");
        break;

    default:
        console.log("არასწორი მნიშვნელობა");
}

