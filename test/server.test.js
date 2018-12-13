const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);



describe('Server', () => {
  describe('Makers', () => {
    describe('GET', () => {
      it('should return text to the home page', done => {
        chai.request(app)
          .get('/api/v1/makers')
          .end((err, response) => {
            expect(response).to.have.status(200);
            done()
        });
      });
      
      it('should return an array of objects', done  => {
        chai.request(app)
          .get('/api/v1/makers')
          .end((err, response) => {
            expect(response.body).to.be.a('array');
            done()
        });
      });
    });

    describe('POST', () => {
      it('should return a 201 status if successful', done => {
        const newMaker = {
          "maker": "Pagani",
          "year": 2018
        }

        chai.request(app)
          .post('/api/v1/makers')
          .send(newMaker)
          .end((err, response) => {
            expect(response).to.have.status(201);
            done()
        })
      });

      it('should return a 422 if any params are missing', done => {
        const newMaker = {
          "maker": "Pagani"
        }

        chai.request(app)
          .post('/api/v1/makers')
          .send(newMaker)
          .end((err, response) => {
            expect(response).to.have.status(422);
            done()
          });
      });
    });

    describe('DELETE', () => {
    });
  });

  describe('Makers:ID', () => {
    describe('GET', () => {
      it('should return a status of 404 if the Id is not found in the database', done => {
        chai.request(app)
          .get('/api/v1/makers/abcd')
          .end((err, response) => {
            expect(response).to.have.status(404)
            done()
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
      it('should return text to the home page', done => {
        chai.request(app)
          .get('/api/v1/models')
          .end((err, response) => {
            expect(response).to.have.status(200);
            done()
          });
      });

      it('should return an array of objects', done => {
        chai.request(app)
          .get('/api/v1/models')
          .end((err, response) => {
            expect(response.body).to.be.a('array');
            done()
          });
      });

    });

    describe('POST', () => {
      it('should return a 201 status if successful', done => {
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
            done()
          });
      });

      it('should return a 422 if any params are missing', done => {
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
            done()
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