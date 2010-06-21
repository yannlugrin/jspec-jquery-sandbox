
describe 'jspec-jquery-sandbox'

  describe 'not loaded'

    it 'should throw error if jQuery is not loaded'
      -{ eval(JSpec.load('../lib/jspec.jquery.sandbox.js')) }.should.throw_error /when using jspec.jquery.sandbox.js/
    end

    it 'should be loaded if jQuery is loaded'
      eval(JSpec.load('./support/jquery.js'))
      -{ eval(JSpec.load('../lib/jspec.jquery.sandbox.js')) }.should_not.throw_error
    end

  end

  describe 'loaded'

    before_each
      eval(JSpec.load('./support/jquery.js'))
      eval(JSpec.load('./lib/jspec.jquery.js'))
      eval(JSpec.load('../lib/jspec.jquery.sandbox.js'))
    end

  end
end

