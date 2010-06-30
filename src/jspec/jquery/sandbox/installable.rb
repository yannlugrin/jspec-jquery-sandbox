require 'open-uri'

module JSpec
  class Installable
    class Jquerysandbox < self

      def before
        warn 'jQuery Sandbox does not yet support --release' if options[:release]
      end

      def lib_source
        File.expand_path('../../../../../lib/jspec.jquery.sandbox.js', __FILE__)
      end

      def sandbox_source
        File.expand_path('../../../../../lib/jspec.jquery.sandbox.html', __FILE__)
      end

      def lib_dest
        options[:to] + '/jspec.jquery.sandbox.js'
      end

      def sandbox_dest
        options[:to] + '/jspec.jquery.sandbox.html'
      end

      def install
        File.open(lib_dest, 'w+') do |file|
          file.write open(lib_source).read
        end
        File.open(sandbox_dest, 'w+') do |file|
          file.write open(sandbox_source).read
        end
      end

      def install_message
        "jQuery Sandbox  installed to #{lib_dest} and #{sandbox_dest}"
      end

    end
  end
end
