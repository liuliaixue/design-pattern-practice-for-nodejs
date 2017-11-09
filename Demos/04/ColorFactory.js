
class Color {
    fill ()  {
        console.log('@@@@@@@ file Color')
    }
}

class Red extends Color{
    draw () {
        console.log('@@@@@@@ file Red') 
    }
}
class Blue extends Color{
    draw () {
        console.log('@@@@@@@ file Blue') 
    }
}

class ColorFactory {
    constructor(color) {
        if(color === 'Red') return new Red();
        if(color === 'Blue') return new Blue();
        return new Color();
    }
}

module.exports = ColorFactory;