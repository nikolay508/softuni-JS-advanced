describe('test for the inputs', ()=>{
    let payment;

    beforeEach(()=>{
        payment = new PaymentPackage('Ivan', 10)
    })
    
    afterEach(()=>{
        payment = null;
    })

    it('should return the right name', ()=>{
        expect(payment.name).to.equal('Ivan');
    })
    it('should return the right value', ()=>{
        expect(payment.value).to.equal(10);
    })
    it('should return the right VAT', ()=>{
        expect(payment.VAT).to.equal(20);
    })
    it('should return the right active', ()=>{
        expect(payment.active).to.equal(true);
    })
})

describe('test for the name',()=>{
    it('should throw an error', ()=>{
        expect(() => new PaymentPackage(12, 10)).to.throw('Name must be a non-empty string');
    })
    it('should throw an error', ()=>{
        expect(() => new PaymentPackage([12], 10)).to.throw('Name must be a non-empty string');
    })
    it('should throw an error', ()=>{
        expect(() => new PaymentPackage(true, 10)).to.throw('Name must be a non-empty string');
    })
    it('should throw an error', ()=>{
        expect(() => new PaymentPackage({num: 12}, 10)).to.throw('Name must be a non-empty string');
    })
    it('should throw an error', ()=>{
        expect(() => new PaymentPackage('', 10)).to.throw('Name must be a non-empty string');
    })
    it('should not throw an error', ()=>{
        expect(() => new PaymentPackage('str', 10)).not.to.throw('Name must be a non-empty string');
    })
})

describe('test for the value',()=>{
    it('should throw an error', ()=>{
        expect(() => new PaymentPackage('str', '10')).to.throw('Value must be a non-negative number');
    })
    it('should throw an error', ()=>{
        expect(() => new PaymentPackage('str', [10])).to.throw('Value must be a non-negative number');
    })
    it('should throw an error', ()=>{
        expect(() => new PaymentPackage('str', {num:10})).to.throw('Value must be a non-negative number');
    })
    it('should throw an error', ()=>{
        expect(() => new PaymentPackage('str', true)).to.throw('Value must be a non-negative number');
    })
    it('should throw an error', ()=>{
        expect(() => new PaymentPackage('str', -10)).to.throw('Value must be a non-negative number');
    })
    it('should not throw an error', ()=>{
        expect(() => new PaymentPackage('str', 10)).not.to.throw('Value must be a non-negative number');
    })
})

describe('test for the VAT',()=>{
    it('should throw an error', ()=>{
        let payment = new PaymentPackage('abc', 123);
        expect(() => payment.VAT = '123').to.throw('VAT must be a non-negative number');
    })
    it('should throw an error', ()=>{
        let payment = new PaymentPackage('abc', 123);
        expect(() => payment.VAT = ['123']).to.throw('VAT must be a non-negative number');
    })
    it('should throw an error', ()=>{
        let payment = new PaymentPackage('abc', 123);
        expect(() => payment.VAT = {num:'123'}).to.throw('VAT must be a non-negative number');
    })
    it('should throw an error', ()=>{
        let payment = new PaymentPackage('abc', 123);
        expect(() => payment.VAT = true).to.throw('VAT must be a non-negative number');
    })
    it('should throw an error', ()=>{
        let payment = new PaymentPackage('abc', 123);
        expect(() => payment.VAT = -123).to.throw('VAT must be a non-negative number');
    })
    it('should not throw an error', ()=>{
        let payment = new PaymentPackage('abc', 123);
        expect(() => payment.VAT = 123).not.to.throw('VAT must be a non-negative number');
    })
})

describe('test for the active',()=>{
    it('should throw an error', ()=>{
        let payment = new PaymentPackage('abc', 123);
        expect(() => payment.active = '123').to.throw('Active status must be a boolean');
    })
    it('should throw an error', ()=>{
        let payment = new PaymentPackage('abc', 123);
        expect(() => payment.active = 123).to.throw('Active status must be a boolean');
    })
    it('should throw an error', ()=>{
        let payment = new PaymentPackage('abc', 123);
        expect(() => payment.active = ['123']).to.throw('Active status must be a boolean');
    })
    it('should throw an error', ()=>{
        let payment = new PaymentPackage('abc', 123);
        expect(() => payment.active = {num:'123'}).to.throw('Active status must be a boolean');
    })
    it('should not throw an error', ()=>{
        let payment = new PaymentPackage('abc', 123);
        expect(() => payment.active = true).not.to.throw('Active status must be a boolean');
    })
})

describe('test for the set and get', ()=>{
    let payment;
    
    beforeEach(()=>{
        payment = new PaymentPackage('Tom', 10);
    })

    it('should get and set the name', ()=>{
        expect(payment.name).to.equal('Tom');
        payment.name = 'Ivan';
        expect(payment.name).to.equal('Ivan');
    })
    it('should get and set the value', ()=>{
        expect(payment.value).to.equal(10);
        payment.value = 20;
        expect(payment.value).to.equal(20);
    })
    it('should get and set the VAT', ()=>{
        expect(payment.VAT).to.equal(20);
        payment.VAT = 10;
        expect(payment.VAT).to.equal(10);
    })
    it('should get and set the active', ()=>{
        expect(payment.active).to.equal(true);
        payment.active = false;
        expect(payment.active).to.equal(false);
    })
})

describe('test the toString func', ()=>{
    let payment;
    beforeEach(()=>{payment = new PaymentPackage('Ivan', 10)})

    it('test it with active - true', ()=>{
        let output = [
            `Package: Ivan`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): 12`
          ];
        
        expect(payment.toString()).to.be.equal(output.join('\n'))
    })

    it('test it with active - true', ()=>{
        let output = [
            `Package: Ivan (inactive)`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): 12`
          ];
        payment.active = false;
        expect(payment.toString()).to.be.equal(output.join('\n'))
    })
})
