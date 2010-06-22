
describe 'jspec-jquery-sandbox'

  // not loaded
  describe ''

    it 'should throw error if jQuery is not loaded'
      -{ eval(JSpec.load('../lib/jspec.jquery.sandbox.js')) }.should.throw_error /when using jspec.jquery.sandbox.js/
    end

    it 'should be loaded if jQuery is loaded'
      eval(JSpec.load('./support/jquery.js'))
      -{ eval(JSpec.load('../lib/jspec.jquery.sandbox.js')) }.should_not.throw_error
    end

  end

  // loaded
  describe ''

    before
      eval(JSpec.load('./support/jquery.js'))
      eval(JSpec.load('./lib/jspec.jquery.js'))
      eval(JSpec.load('../lib/jspec.jquery.sandbox.js'))
    end

    it '` _jQuery` (and _$ aload) should be present'
      _jQuery.should.be_a Function
      _$.should.be_a Function
      _$.should.eql _jQuery
    end

    it '`_jQuery` should use jSpec context'
      _jQuery('body').should_not.have_class 'sandbox'
      _jQuery('body').should.have_class 'jspec'
    end

    it '`jQuery` should use sandbox context'
      jQuery('body').should.have_class 'sandbox'
      jQuery('body').should_not.have_class 'jspec'
    end

    it 'should use sandbox context'
      jQuery('body').append('<p id="lorem-ipsum">Lorem Ispum</p>')

      jQuery('body').should.have_child('#lorem-ipsum')
      _jQuery('body').should_not.have_child('#lorem-ipsum')
    end

    it 'should throw error if sandbox iframe is not present'
      _jQuery('iframe[name=sandbox]').attr('name', 'removed-sandbox')
      -{ jQuery('body') }.should.throw_error(/need a iframe named `sandbox' when using jspec.jquery.sandbox.js/)
      _jQuery('iframe[name=removed-sandbox]').attr('name', 'sandbox')
    end

    it 'should clear sandbox after spec'
      jQuery('body').append('<p id="lorem-ipsum">Lorem Ispum</p>')
      hook('afterSpec')
      jQuery('body').html().should.be_empty
    end

    describe 'sandbox method'

      it 'should exist'
        sandbox.should.be_a Function
      end

      it 'should return sandbox body element by default'
        sandbox().should.have_class 'sandbox'
      end

      it 'should append html in argument to sandbox body and return it'
        item = sandbox(' <p class="test-p">Lorem Ipsum</p> ')
        item.should.have_class 'test-p'
        jQuery('body').should.have_child('p')
      end

      it 'should load fixture in argument to sandbox body and return it'
        item = sandbox('test-div')
        item.should.have_class 'test-div'
        jQuery('body').should.have_child('div')
      end

    end
  end
end

