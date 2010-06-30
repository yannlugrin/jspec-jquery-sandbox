require 'rubygems'
require 'rspec'
require 'rspec/autorun'
require 'fileutils'

def jspec *args
  `jspec #{args.join(' ')}`
end

