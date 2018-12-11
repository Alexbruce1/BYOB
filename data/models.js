let models = [
  {
    make: 'Audi',
    model: 'R8',
    displacement: '5.2',
    engine: 'V10',
    drivetrain: 'AWD',
    horsepower: 610,
    torque: 430,
    price: 175000
  },
  {
    make: 'Audi',
    model: 'RS7',
    displacement: '4',
    engine: 'V8',
    drivetrain: 'AWD',
    horsepower: 560,
    torque: 516,
    price: 125000
  },
  {
    make: 'Bentley',
    model: 'Continental GT',
    displacement: '6',
    engine: 'W12',
    drivetrain: 'AWD',
    horsepower: 582,
    torque: 750,
    price: 220000
  },
  {
    make: 'Bentley',
    model: 'Bentayga',
    displacement: '6',
    engine: 'V12',
    drivetrain: 'AWD',
    horsepower: 600,
    torque: 664,
    price: 165000
  },
  {
    make: 'BMW',
    model: 'M3',
    displacement: '3',
    engine: 'I6',
    drivetrain: 'RWD',
    horsepower: 453,
    torque: 443,
    price: 76000
  },
  {
    make: 'BMW',
    model: 'M5',
    displacement: '4.4',
    engine: 'V8',
    drivetrain: 'AWD',
    horsepower: 600,
    torque: 553,
    price: 120000
  },
  {
    make: 'Bugatti',
    model: 'Veyron',
    displacement: '8',
    engine: 'W16',
    drivetrain: 'AWD',
    horsepower: 1200,
    torque: 1106,
    price: 1600000
  },
  {
    make: 'Bugatti',
    model: 'Chiron',
    displacement: '8',
    engine: 'W16',
    drivetrain: 'AWD',
    horsepower: 1500,
    torque: 1180,
    price: 2700000
  },
  {
    make: 'Chevrolet',
    model: 'Corvette',
    displacement: '3.9',
    engine: 'v6',
    drivetrain: 'RWD',
    horsepower: 150,
    torque: undefined,
    price: 300000
  },
  {
    make: 'Chevrolet',
    model: 'Camaro',
    displacement: '3.8',
    engine: 'V8',
    drivetrain: 'RWD',
    horsepower: 155,
    torque: 0,
    price: 100000
  },
  {
    make: 'Dodge',
    model: 'Viper',
    displacement: '8',
    engine: 'V10',
    drivetrain: 'RWD',
    horsepower: 415,
    torque: 462,
    price: 25000
  },
  {
    make: 'Dodge',
    model: 'Challenger',
    displacement: '6.2',
    engine: 'V8',
    drivetrain: 'RWD',
    horsepower: 840,
    torque: 770,
    price: 85000
  },
  {
    make: 'Ferrari',
    model: '458',
    displacement: '4.5',
    engine: 'V8',
    drivetrain: 'Rwd',
    horsepower: 562,
    torque: 398,
    price: 270000
  },
  {
    make: 'Ferrari',
    model: 'LaFerrari',
    displacement: '6.3',
    engine: 'V12',
    drivetrain: 'RWD',
    horsepower: 949,
    torque: 664,
    price: 1700000
  },
  {
    make: 'Ford',
    model: 'Mustang',
    displacement: '5',
    engine: 'V8',
    drivetrain: 'RWD',
    horsepower: 480,
    torque: 420,
    price: 50000
  },
  {
    make: 'Ford',
    model: 'GT',
    displacement: '5.4',
    engine: 'V8',
    drivetrain: 'RWD',
    horsepower: 550,
    torque: 500,
    price: 450000
  },
  {
    make: 'Honda',
    model: 'NSX',
    displacement: '3',
    engine: 'v6',
    drivetrain: 'RWD',
    horsepower: 270,
    torque: 210,
    price: 30000
  },
  {
    make: 'Honda',
    model: 'S2000',
    displacement: '2',
    engine: 'I4',
    drivetrain: 'RWD',
    horsepower: 247,
    torque: 161,
    price: 21000
  },
  {
    make: 'Jaguar',
    model: 'F-Type',
    displacement: '5.0',
    engine: 'V8',
    drivetrain: 'RWD',
    horsepower: 575,
    torque: 339,
    price: 69000
  },
  {
    make: 'Jaguar',
    model: 'F-Pace',
    displacement: '5',
    engine: 'V8',
    drivetrain: 'AWD',
    horsepower: 550,
    torque: 502,
    price: 60000
  },
  {
    make: 'Koenigsegg',
    model: 'Agera',
    displacement: '4',
    engine: 'V8',
    drivetrain: 'RWD',
    horsepower: 1341,
    torque: 1011,
    price: 2000000
  },
  {
    make: 'Koenigsegg',
    model: 'Regera',
    displacement: '4',
    engine: 'V8',
    drivetrain: 'RWD',
    horsepower: 1500,
    torque: 1475,
    price: 2100000
  },
  {
    make: 'Lamborghini',
    model: 'Huracan',
    displacement: '5.2',
    engine: 'V10',
    drivetrain: 'AWD',
    horsepower: 610,
    torque: 442,
    price: 320000
  },
  {
    make: 'Lamborghini',
    model: 'Aventador',
    displacement: '6.2',
    engine: 'V12',
    drivetrain: 'AWD',
    horsepower: 740,
    torque: 507,
    price: 480000
  },
  {
    make: 'Lexus',
    model: 'LFA',
    displacement: '4.8',
    engine: 'V10',
    drivetrain: 'RWD',
    horsepower: 520,
    torque: 354,
    price: 400000
  },
  {
    make: 'Lexus',
    model: 'RCF',
    displacement: '5',
    engine: 'V8',
    drivetrain: 'RWD',
    horsepower: 467,
    torque: 389,
    price: 70000
  },
  {
    make: 'McLaren',
    model: '600LT',
    displacement: '4',
    engine: 'V8',
    drivetrain: 'RWD',
    horsepower: 600,
    torque: 457,
    price: 280000
  },
  {
    make: 'McLaren',
    model: 'Senna',
    displacement: '4',
    engine: 'V8',
    drivetrain: 'RWD',
    horsepower: 789,
    torque: 590,
    price: 900000
  },
  {
    make: 'Porsche',
    model: '918 Spyder',
    displacement: '4.6',
    engine: 'V8',
    drivetrain: 'AWD',
    horsepower: 887,
    torque: 530,
    price: 1300000
  },
  {
    make: 'Porsche',
    model: '911 Turbo',
    displacement: '3.6',
    engine: 'Flat 6',
    drivetrain: 'AWD',
    horsepower: 515,
    torque: 480,
    price: 90000
  }
];

module.exports = models;