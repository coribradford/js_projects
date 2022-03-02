const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers () {
      return this._courses.appetizers
    },
    set appetizers (newAppetizer) {
      this._courses.appetizers.push(newAppetizer)
    },
    get mains () {
      return this._courses.mains
    },
    set mains (newMain) {
      this._courses.mains.push(newMain)
    },
    get desserts () {
      return this._courses.desserts
    },
    set desserts (newDessert) {
      this._courses.desserts.push(newDessert)
    },
    get courses () {
      return {appetizers: this._courses.appetizers, mains: this._courses.mains, desserts: this._courses.desserts}
    },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {name: dishName, price: dishPrice}
      if (courseName === 'appetizers') {
        this.appetizers = dish
      } else if (courseName === 'mains') {
        this.mains = dish
      } else if (courseName === 'desserts') {
        this.desserts = dish
      } else {
        console.log('Please add the dish to the appetizers, mains, or desserts course.')
      }
    },
    getRandomDishFromCourse (courseName) {
      let dishes = this._courses[courseName]
      let index = Math.floor(Math.random() * dishes.length)
      return dishes[index]
    },
    generateRandomMeal () {
      let app = this.getRandomDishFromCourse('appetizers')
      let main = this.getRandomDishFromCourse('mains')
      let dessert = this.getRandomDishFromCourse('desserts')
      let totalPrice = app.price + main.price + dessert.price
      return `Your meal is ${app.name} as a starter, ${main.name} for an entree, and ${dessert.name} for dessert. The total cost for the meal will be \$${totalPrice}.`
    }
  }
  
  menu.addDishToCourse('appetizers', 'fruit', 13)
  menu.addDishToCourse('mains', 'fish', 17)
  menu.addDishToCourse('desserts', 'coffee and ice cream', 11)
  console.log(menu.generateRandomMeal())