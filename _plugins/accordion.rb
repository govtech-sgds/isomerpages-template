# frozen_string_literal: true

require_relative 'base'

module Isomer
	class AccordionTagBlock < Liquid::Block
		include Isomer::Base

    def initialize(tag_name, options, tokens)
      super
      @title = options
    end

		def render(context)
			@context = context
      text = super
			<<~ACCORDION
			<div class="accordion">
				<div class="sgds-accordion-header padding is-marginless pointer">
					<h5 class="has-text-grey-dark is-marginless"><b>#{@title}</b></h5>
    				<span class="sgds-icon sgds-icon-plus is-size-4 sgds-accordion-button"></span>
				</div>
				<div class="sgds-accordion-body padding">
					#{markdown_converter.convert(text)}
				</div>
			</div>
			ACCORDION
    end
  end
end

Liquid::Template.register_tag('accordion', Isomer::AccordionTagBlock)
