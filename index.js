class Statement {
    constructor(title, contactPersonName, contactPersonNumber, address, description, pet, price, image, color, weight) {
        this.image = image;
        this.title = title;
        this.contactPersonName = contactPersonName;
        this.contactPersonNumber = contactPersonNumber;
        this.address = address;
        this.description = description;
        this.pet = pet;
        this.price = price;
        this.color = color;
        this.weight = weight;
    }
}

class Pet {
    constructor(category, age, gender) {
        this.category = category;
        this.age = age;
        this.gender = gender;
    }
}

class Cat extends Pet {
    constructor(category, age, gender, toiletFriendly) {
        super(category, age, gender);
        this.toiletFriendly = toiletFriendly;
    }
}

class Dog extends Pet {
    constructor(category, age, gender, smell, swim) {
        super(category, age, gender);
        this.smell = smell;
        this.swim = swim;
    }
}

class Hamster extends Pet {
    constructor(category, age, gender, Rodent) {
        super(category, age, gender);
        this.Rodent = Rodent;
    }
}

const statement = new Statement('ჩუქდება თეთრი კნუტი, 1 თვის', 'ლუკა', '599931926', 'თბილისი', 'არის ძალიან საყვარელი', null, 0, null, 'თეთრი', '500გრ');


