module JSpec
  class Installable
    class Jquerysandbox < URI
      name 'jQuery Sandbox'
      uri File.expand_path('../../../../../lib/jspec.jquery.sandbox.js', __FILE__)

      def path
        options[:to] + '/jspec.jquery.sandbox.js'
      end

      def release
        warn 'jQuery Sandbox does not yet support --release' if options[:release]
        'edge'
      end
    end
  end
end
