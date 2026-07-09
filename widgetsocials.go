// Package widgetsocials is the "Follow me" DRIVER — Social profile links.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-socials"
package widgetsocials

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "socials",
		Title:       "Follow me",
		DefaultZone: "sidebar",
		Asset:       "/widgets/socials.js",
	})
}
