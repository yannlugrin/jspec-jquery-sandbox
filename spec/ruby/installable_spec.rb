require File.expand_path('../spec_helper', __FILE__)
include FileUtils

describe 'jspec' do
  describe 'install' do
    before :each do
      @dest = File.expand_path('../test', __FILE__)
      mkdir @dest
      jspec(:init, @dest)
      File.open(File.join(@dest, 'spec', 'commands', 'jquery_sandbox_command.rb'), 'w+') do |file|
        file.write "require '#{File.expand_path('../../../src/jspec/jquery/sandbox/installable', __FILE__)
}'"
      end
    end

    after :each do
      rm_rf @dest
    end

    describe 'jquery sandbox' do
      it "should install to spec/support/jspec.jquery.sandbox.js by default" do
        Dir.chdir @dest do
          jspec(:install, 'jquerysandbox')
          File.exists?('spec/support/jspec.jquery.sandbox.js').should be_true
          File.exists?('spec/support/jspec.jquery.sandbox.html').should be_true
        end
      end

      it 'should install to the destination passed' do
        jspec(:install, 'jquerysandbox', "#{@dest}/spec")
        File.exists?("#{@dest}/spec/jspec.jquery.sandbox.js").should be_true
        File.exists?("#{@dest}/spec/jspec.jquery.sandbox.html").should be_true
      end

    end

  end
end
