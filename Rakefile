require 'rubygems'
require 'rake'

begin
  require 'jeweler'
  Jeweler::Tasks.new do |gem|
    gem.name = 'jspec-jquery-sandbox'
    gem.summary = %Q{a window sandbox for jQuery application testing with jSpec}
    gem.email = 'yann.lugrin@sans-savoir.net'
    gem.homepage = 'http://github.com/yannlugrin/jspec-jquery-sandbox'
    gem.authors = ['Yann Lugrin']
    gem.files = FileList["[A-Z]*", "{lib,src}/**/*"]
    gem.require_paths = ['src']
    gem.add_dependency 'jspec'
    gem.add_development_dependency 'rspec', '>= 2.0.0.beta'
    # gem is a Gem::Specification... see http://www.rubygems.org/read/chapter/20 for additional settings
  end
  Jeweler::GemcutterTasks.new
rescue LoadError
  puts "Jeweler (or a dependency) not available. Install it with: gem install jeweler"
end

require 'rspec/core/rake_task'
RSpec::Core::RakeTask.new(:spec)
RSpec::Core::RakeTask.new(:rdoc) do |spec|
  spec.rcov = true
end

task :spec => :check_dependencies

task :default => :spec

