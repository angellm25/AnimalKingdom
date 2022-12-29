class AnimalKingdom{
    constructor(){
        if(this.constructor == AnimalKingdom) {
            throw new Error('Error')
        }
    }


    withbackBone() {
        console.log('I am a vertebrae')
    }
    withoutbackBone() {
        console.log('I have no backbone')
    }
    coldBlooded() {
        console.log('I am cold-blooded')
    }
    warmBlooded() {
        console.log('I am warm-blooded')
    }
    
    eat() {
        console.log('I eat food')
    }
}



class Arthropoda extends AnimalKingdom{
    withoutbackBone(){
        super.withoutbackBone()
    }

    coldBlooded() {
        super.coldBlooded
    }
    eat() {
        console.log('I eat anything')
    }
}


class Fish extends AnimalKingdom{
    
    withbackBone() {
        super.withbackBone()
    }
    coldBlooded() {
        super.coldBlooded()
    }

    eat () {
        console.log("I eat other fish.")
    }
    gills = "I have gills."
    
    scales = "I have scales"

}


class Amphibia extends AnimalKingdom{
    withbackBone() {
        super.withbackBone()
    }
    coldBlooded() {
        super.coldBlooded()
    }
    scales = "I have no scales"
    pairedfins = "I do not have paired fins"
    eat() {
        console.log("I eat anything the fits into my mouth.")
    }

}


class Reptile extends AnimalKingdom{
    
    withbackBone() {
        super.withbackBone()
    }
    coldblooded() {
        super.coldBlooded()
    }

    eat() {
        console.log("I eat insects.")
    }

    numberOfLegs = 4
    child = "I lay eggs."
}

class Aves extends AnimalKingdom{
    warmBlooded() {
        super.warmBlooded()
    }
    withbackBone() {
        super.withbackBone()
    }
    
    eat() {
        console.log("I eat insects and seeds.")
    }
    feathers = "I have feathers."
    numberOfTeeth = 0
}

class Mammals extends AnimalKingdom{
    hair = "I have hair"
    withbackBone() {
        super.withbackBone()
    }
    warmBlooded() {
        super.warmBlooded
    }

    eat() {
        console.log("I can eat anything apart from wood and leaf litter.")
    }

    child = "I give birth to my young live."

}

human = new Mammals()
frog = new Amphibia()
lizard = new Reptile()
bird = new Aves()
catfish = new Fish()
spider = new Arthropoda()
