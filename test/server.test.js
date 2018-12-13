const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);



describe('Server', () => {
  describe('Makers', () => {
    describe('GET', () => {
      it('should return text to the home page', () => {
        chai.request(app)
          .get('/api/v1/makers')
          .end((err, response) => {
            expect(response).to.have.status(200);
        });
      });
      
      it('should return an array of objects', ()  => {
        chai.request(app)
          .get('/api/v1/makers')
          .end((err, response) => {
            expect(response.body).to.be.a('array');
        });
      });
    });

    describe('POST', () => {
      it('should return a 201 status if successful', () => {
        const newMaker = {
          "maker": "Pagani",
          "year": 2018
        }

        chai.request(app)
          .post('/api/v1/makers')
          .send(newMaker)
          .end((err, response) => {
            expect(response).to.have.status(201);
        })
      });

      it('should return a 422 if any params are missing', () => {
        const newMaker = {
          "maker": "Pagani"
        }

        chai.request(app)
          .post('/api/v1/makers')
          .send(newMaker)
          .end((err, response) => {
            expect(response).to.have.status(422);
          });
      });
    });

    describe('DELETE', () => {
    });
  });

  describe('Makers:ID', () => {
    describe('GET', () => {
      it('should return a status of 404 if the Id is missing from the database', () => {
        chai.request(app)
          .get('/api/v1/makers/12345')
          .end((err, response) => {
            expect(response).to.have.status(404);
          });
      });
    });
    
    describe('POST', () => {
      // it('should', () => {
      // });
    });

    describe('DELETE', () => {
      // it('should', () => {
      // });
    });
  });

  describe('Models', () => {
    describe('GET', () => {
      it('should return text to the home page', () => {
        chai.request(app)
          .get('/api/v1/models')
          .end((err, response) => {
            expect(response).to.have.status(200);
          });
      });

      it('should return an array of objects', () => {
        chai.request(app)
          .get('/api/v1/models')
          .end((err, response) => {
            expect(response.body).to.be.a('array');
          });
      });

    });

    describe('POST', () => {
      it('should return a 201 status if successful', () => {
        const newModel = {
          "model": "Zonda R",
          "displacement": "6",
          "engine": "V12",
          "drivetrain": "RWD",
          "horsepower": 789,
          "torque": null,
          "price": 2800000
        }

        chai.request(app)
          .post('/api/v1/models')
          .send(newModel)
          .end((err, response) => {
            expect(response).to.have.status(201);
          });
      });

      it('should return a 422 if any params are missing', () => {
        const newModel = {
          "displacement": "6",
          "engine": "V12",
          "drivetrain": "RWD",
          "horsepower": 789,
          "torque": null,
          "price": 2800000
        }

        chai.request(app)
          .post('/api/v1/models')
          .send(newModel)
          .end((err, response) => {
            expect(response).to.have.status(422);
          });
      });

    });

    describe('DELETE', () => {
    });
  });

});

describe('Models:ID', () => {
    describe('GET', () => {
      // it('should', () => {
      // });
    });

    describe('POST', () => {
      // it('should', () => {
      // });
    });

    describe('DELETE', () => {
      // it('should', () => {
      // });
    });
});