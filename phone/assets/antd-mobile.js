import transform from "css-to-react-native-transform"

const style = {
  "html": {
    "lineHeight": "1.15",
    "MsTextSizeAdjust": "100%",
    "WebkitTextSizeAdjust": "100%"
  },
  "body": {
    "backgroundColor": "#f5f5f9",
    "fontSize": "14px"
  },
  "article": {
    "display": "block"
  },
  "aside": {
    "display": "block"
  },
  "footer": {
    "display": "block"
  },
  "header": {
    "display": "block"
  },
  "nav": {
    "display": "block"
  },
  "section": {
    "display": "block"
  },
  "h1": {
    "fontSize": "2em",
    "margin": "0.67em 0"
  },
  "figcaption": {
    "display": "block"
  },
  "figure": {
    "margin": "1em 40px"
  },
  "main": {
    "display": "block"
  },
  "hr": {
    "WebkitBoxSizing": "content-box",
    "boxSizing": "content-box",
    "height": "0",
    "overflow": "visible"
  },
  "pre": {
    "fontFamily": "monospace, monospace",
    "fontSize": "1em"
  },
  "a": {
    "background": "transparent",
    "textDecoration": "none",
    "outline": "none"
  },
  "abbr_title": {
    "borderBottom": "none",
    "textDecoration": "underline dotted",
    "WebkitTextDecoration": "underline dotted"
  },
  "b": {
    "fontWeight": "bolder"
  },
  "strong": {
    "fontWeight": "bolder"
  },
  "code": {
    "fontFamily": "monospace, monospace",
    "fontSize": "1em"
  },
  "kbd": {
    "fontFamily": "monospace, monospace",
    "fontSize": "1em"
  },
  "samp": {
    "fontFamily": "monospace, monospace",
    "fontSize": "1em"
  },
  "dfn": {
    "fontStyle": "italic"
  },
  "mark": {
    "backgroundColor": "#ff0",
    "color": "#000"
  },
  "small": {
    "fontSize": "80%"
  },
  "sub": {
    "bottom": "-0.25em"
  },
  "sup": {
    "top": "-0.5em"
  },
  "audio": {
    "display": "inline-block"
  },
  "video": {
    "display": "inline-block"
  },
  "audio_not__controls": {
    "display": "none",
    "height": "0"
  },
  "img": {
    "borderStyle": "none"
  },
  "svg_not__root": {
    "overflow": "hidden"
  },
  "button": {
    "WebkitAppearance": "button"
  },
  "input": {
    "overflow": "visible"
  },
  "optgroup": {
    "fontFamily": "sans-serif",
    "fontSize": "100%",
    "lineHeight": "1.15",
    "margin": "0"
  },
  "select": {
    "textTransform": "none"
  },
  "textarea": {
    "overflow": "auto"
  },
  "html__type__button": {
    "WebkitAppearance": "button"
  },
  "type__reset": {
    "WebkitAppearance": "button"
  },
  "type__submit": {
    "WebkitAppearance": "button"
  },
  "button___moz_focus_inner": {
    "borderStyle": "none",
    "padding": "0"
  },
  "type__button_____moz_focus_inner": {
    "borderStyle": "none",
    "padding": "0"
  },
  "type__reset_____moz_focus_inner": {
    "borderStyle": "none",
    "padding": "0"
  },
  "type__submit_____moz_focus_inner": {
    "borderStyle": "none",
    "padding": "0"
  },
  "button__moz_focusring": {
    "outline": "1px dotted ButtonText"
  },
  "type__button____moz_focusring": {
    "outline": "1px dotted ButtonText"
  },
  "type__reset____moz_focusring": {
    "outline": "1px dotted ButtonText"
  },
  "type__submit____moz_focusring": {
    "outline": "1px dotted ButtonText"
  },
  "fieldset": {
    "padding": "0.35em 0.75em 0.625em"
  },
  "legend": {
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "color": "inherit",
    "display": "table",
    "maxWidth": "100%",
    "padding": "0",
    "whiteSpace": "normal"
  },
  "progress": {
    "display": "inline-block",
    "verticalAlign": "baseline"
  },
  "type__checkbox": {
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "padding": "0"
  },
  "type__radio": {
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "padding": "0"
  },
  "type__number_____webkit_inner_spin_button": {
    "height": "auto"
  },
  "type__number_____webkit_outer_spin_button": {
    "height": "auto"
  },
  "type__search": {
    "WebkitAppearance": "textfield",
    "outlineOffset": "-2px"
  },
  "type__search_____webkit_search_cancel_button": {
    "WebkitAppearance": "none"
  },
  "type__search_____webkit_search_decoration": {
    "WebkitAppearance": "none"
  },
  "webkit_file_upload_button": {
    "WebkitAppearance": "button",
    "font": "inherit"
  },
  "details": {
    "display": "block"
  },
  "menu": {
    "display": "block"
  },
  "summary": {
    "display": "list-item"
  },
  "canvas": {
    "display": "inline-block"
  },
  "template": {
    "display": "none"
  },
  "hidden": {
    "display": "none"
  },
  "am_fade_enter": {
    "opacity": "0",
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "animationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_fade_appear": {
    "opacity": "0",
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "animationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_fade_leave": {
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "animationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_fade_enter_am_fade_enter_active": {
    "WebkitAnimationName": "amFadeIn",
    "animationName": "amFadeIn",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "am_fade_appear_am_fade_appear_active": {
    "WebkitAnimationName": "amFadeIn",
    "animationName": "amFadeIn",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "am_fade_leave_am_fade_leave_active": {
    "WebkitAnimationName": "amFadeOut",
    "animationName": "amFadeOut",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "am_slide_up_enter": {
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "animationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_slide_up_appear": {
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "animationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_slide_up_leave": {
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "animationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_slide_up_enter_am_slide_up_enter_active": {
    "WebkitAnimationName": "amSlideUpIn",
    "animationName": "amSlideUpIn",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "am_slide_up_appear_am_slide_up_appear_active": {
    "WebkitAnimationName": "amSlideUpIn",
    "animationName": "amSlideUpIn",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "am_slide_up_leave_am_slide_up_leave_active": {
    "WebkitAnimationName": "amSlideUpOut",
    "animationName": "amSlideUpOut",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "am_am_zoom_enter": {
    "display": "block"
  },
  "am_am_zoom_leave": {
    "display": "block"
  },
  "am_zoom_enter": {
    "opacity": "0",
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
    "animationTimingFunction": "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_zoom_appear": {
    "opacity": "0",
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
    "animationTimingFunction": "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_zoom_leave": {
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.6, -0.3, 0.74, 0.05)",
    "animationTimingFunction": "cubic-bezier(0.6, -0.3, 0.74, 0.05)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_zoom_enter_am_zoom_enter_active": {
    "WebkitAnimationName": "amZoomIn",
    "animationName": "amZoomIn",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "am_zoom_appear_am_zoom_appear_active": {
    "WebkitAnimationName": "amZoomIn",
    "animationName": "amZoomIn",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "am_zoom_leave_am_zoom_leave_active": {
    "WebkitAnimationName": "amZoomOut",
    "animationName": "amZoomOut",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "am_slide_down_enter": {
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "animationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_slide_down_appear": {
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "animationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_slide_down_leave": {
    "WebkitAnimationDuration": ".2s",
    "animationDuration": ".2s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both",
    "WebkitAnimationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "animationTimingFunction": "cubic-bezier(0.55, 0, 0.55, 0.2)",
    "WebkitAnimationPlayState": "paused",
    "animationPlayState": "paused"
  },
  "am_slide_down_enter_am_slide_down_enter_active": {
    "WebkitAnimationName": "amSlideDownIn",
    "animationName": "amSlideDownIn",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "am_slide_down_appear_am_slide_down_appear_active": {
    "WebkitAnimationName": "amSlideDownIn",
    "animationName": "amSlideDownIn",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "am_slide_down_leave_am_slide_down_leave_active": {
    "WebkitAnimationName": "amSlideDownOut",
    "animationName": "amSlideDownOut",
    "WebkitAnimationPlayState": "running",
    "animationPlayState": "running"
  },
  "": {
    "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
  },
  "before": {
    "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
  },
  "after": {
    "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
  },
  "contenteditable": {
    "WebkitUserSelect": "auto !important"
  },
  "focus": {
    "outline": "none"
  },
  "am_accordion": {
    "position": "relative",
    "borderTop": "1PX solid #ddd"
  },
  "@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx)": {
    "__expression__": "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx)",
    "html_not__data_scale____am_accordion": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_accordion__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_accordion__am_accordion_item__am_accordion_header": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_accordion__am_accordion_item__am_accordion_header__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_accordion__am_accordion_item__am_accordion_content__am_accordion_content_box": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_accordion__am_accordion_item__am_accordion_content__am_accordion_content_box__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_action_sheet_button_list_item": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_action_sheet_button_list_item__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_action_sheet_button_list__am_action_sheet_cancel_button_mask": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_action_sheet_button_list__am_action_sheet_cancel_button_mask__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_action_sheet_button_list__am_action_sheet_cancel_button_mask__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_action_sheet_share_list": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_action_sheet_share_list__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_action_sheet_share_cancel_button": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_action_sheet_share_cancel_button__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_button": {
      "position": "relative",
      "border": "none"
    },
    "html_not__data_scale____am_button__before": {
      "content": "''",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "200%",
      "height": "200%",
      "border": "1PX solid #ddd",
      "borderRadius": "10px",
      "WebkitTransformOrigin": "0 0",
      "MsTransformOrigin": "0 0",
      "transformOrigin": "0 0",
      "WebkitTransform": "scale(0.5)",
      "MsTransform": "scale(0.5)",
      "transform": "scale(0.5)",
      "WebkitBoxSizing": "border-box",
      "boxSizing": "border-box",
      "pointerEvents": "none"
    },
    "html_not__data_scale____am_button_primary": {
      "position": "relative",
      "border": "none"
    },
    "html_not__data_scale____am_button_primary__before": {
      "content": "''",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "200%",
      "height": "200%",
      "border": "1PX solid #108ee9",
      "borderRadius": "10px",
      "WebkitTransformOrigin": "0 0",
      "MsTransformOrigin": "0 0",
      "transformOrigin": "0 0",
      "WebkitTransform": "scale(0.5)",
      "MsTransform": "scale(0.5)",
      "transform": "scale(0.5)",
      "WebkitBoxSizing": "border-box",
      "boxSizing": "border-box",
      "pointerEvents": "none"
    },
    "html_not__data_scale____am_button_ghost": {
      "position": "relative",
      "border": "none"
    },
    "html_not__data_scale____am_button_ghost__before": {
      "content": "''",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "200%",
      "height": "200%",
      "border": "1PX solid #108ee9",
      "borderRadius": "10px",
      "WebkitTransformOrigin": "0 0",
      "MsTransformOrigin": "0 0",
      "transformOrigin": "0 0",
      "WebkitTransform": "scale(0.5)",
      "MsTransform": "scale(0.5)",
      "transform": "scale(0.5)",
      "WebkitBoxSizing": "border-box",
      "boxSizing": "border-box",
      "pointerEvents": "none"
    },
    "html_not__data_scale____am_button_ghost_am_button_active": {
      "position": "relative",
      "border": "none"
    },
    "html_not__data_scale____am_button_ghost_am_button_active__before": {
      "content": "''",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "200%",
      "height": "200%",
      "border": "1PX solid rgba(16, 142, 233, 0.6)",
      "borderRadius": "10px",
      "WebkitTransformOrigin": "0 0",
      "MsTransformOrigin": "0 0",
      "transformOrigin": "0 0",
      "WebkitTransform": "scale(0.5)",
      "MsTransform": "scale(0.5)",
      "transform": "scale(0.5)",
      "WebkitBoxSizing": "border-box",
      "boxSizing": "border-box",
      "pointerEvents": "none"
    },
    "html_not__data_scale____am_button_ghost_am_button_disabled": {
      "position": "relative",
      "border": "none"
    },
    "html_not__data_scale____am_button_ghost_am_button_disabled__before": {
      "content": "''",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "200%",
      "height": "200%",
      "border": "1PX solid rgba(0, 0, 0, 0.1)",
      "borderRadius": "10px",
      "WebkitTransformOrigin": "0 0",
      "MsTransformOrigin": "0 0",
      "transformOrigin": "0 0",
      "WebkitTransform": "scale(0.5)",
      "MsTransform": "scale(0.5)",
      "transform": "scale(0.5)",
      "WebkitBoxSizing": "border-box",
      "boxSizing": "border-box",
      "pointerEvents": "none"
    },
    "html_not__data_scale____am_picker_col_indicator": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_picker_col_indicator__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_picker_col_indicator__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_picker_popup_header": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_picker_popup_header__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_card_not__am_card_full": {
      "position": "relative",
      "border": "none"
    },
    "html_not__data_scale____am_card_not__am_card_full___before": {
      "content": "''",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "200%",
      "height": "200%",
      "border": "1PX solid #ddd",
      "borderRadius": "10px",
      "WebkitTransformOrigin": "0 0",
      "MsTransformOrigin": "0 0",
      "transformOrigin": "0 0",
      "WebkitTransform": "scale(0.5)",
      "MsTransform": "scale(0.5)",
      "transform": "scale(0.5)",
      "WebkitBoxSizing": "border-box",
      "boxSizing": "border-box",
      "pointerEvents": "none"
    },
    "html_not__data_scale____am_card_am_card_full": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_card_am_card_full__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_card_am_card_full__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_card_body": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_card_body__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_list_body": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_list_body__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_list_body__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_list_body_div_not__last_child___am_list_line": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_list_body_div_not__last_child___am_list_line__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_grid_am_grid_line_not__am_grid_carousel": {
      "borderRight": "none"
    },
    "html_not__data_scale____am_grid_am_grid_line_not__am_grid_carousel___before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_grid_am_grid_line_not__am_grid_carousel___after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "0",
      "bottom": "auto",
      "left": "auto",
      "width": "1PX",
      "height": "100%",
      "background": "#ddd",
      "WebkitTransformOrigin": "100% 50%",
      "MsTransformOrigin": "100% 50%",
      "transformOrigin": "100% 50%",
      "WebkitTransform": "scaleX(0.5)",
      "MsTransform": "scaleX(0.5)",
      "transform": "scaleX(0.5)"
    },
    "html_not__data_scale____am_grid_am_grid_line__am_flexbox": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_grid_am_grid_line__am_flexbox__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_grid_am_grid_line__am_flexbox__am_flexbox_item_first_child": {
      "borderLeft": "none"
    },
    "html_not__data_scale____am_grid_am_grid_line__am_flexbox__am_flexbox_item_first_child__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "1PX",
      "height": "100%",
      "WebkitTransformOrigin": "100% 50%",
      "MsTransformOrigin": "100% 50%",
      "transformOrigin": "100% 50%",
      "WebkitTransform": "scaleX(0.5)",
      "MsTransform": "scaleX(0.5)",
      "transform": "scaleX(0.5)"
    },
    "html_not__data_scale____am_grid_am_grid_line__am_flexbox__am_flexbox_item_not__last_child": {
      "borderRight": "none"
    },
    "html_not__data_scale____am_grid_am_grid_line__am_flexbox__am_flexbox_item_not__last_child___after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "0",
      "bottom": "auto",
      "left": "auto",
      "width": "1PX",
      "height": "100%",
      "background": "#ddd",
      "WebkitTransformOrigin": "100% 50%",
      "MsTransformOrigin": "100% 50%",
      "transformOrigin": "100% 50%",
      "WebkitTransform": "scaleX(0.5)",
      "MsTransform": "scaleX(0.5)",
      "transform": "scaleX(0.5)"
    },
    "html_not__data_scale____am_grid_am_grid_line_am_grid_carousel__am_grid_carousel_page": {
      "borderRight": "none"
    },
    "html_not__data_scale____am_grid_am_grid_line_am_grid_carousel__am_grid_carousel_page__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_grid_am_grid_line_am_grid_carousel__am_grid_carousel_page__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "0",
      "bottom": "auto",
      "left": "auto",
      "width": "1PX",
      "height": "100%",
      "background": "#ddd",
      "WebkitTransformOrigin": "100% 50%",
      "MsTransformOrigin": "100% 50%",
      "transformOrigin": "100% 50%",
      "WebkitTransform": "scaleX(0.5)",
      "MsTransform": "scaleX(0.5)",
      "transform": "scaleX(0.5)"
    },
    "html_not__data_scale____am_number_keyboard_wrapper_table": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_number_keyboard_wrapper_table__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_not__keyboard_confirm": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_not__keyboard_confirm___before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "1PX",
      "height": "100%",
      "WebkitTransformOrigin": "100% 50%",
      "MsTransformOrigin": "100% 50%",
      "transformOrigin": "100% 50%",
      "WebkitTransform": "scaleX(0.5)",
      "MsTransform": "scaleX(0.5)",
      "transform": "scaleX(0.5)"
    },
    "html_not__data_scale____am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_not__keyboard_confirm___after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_keyboard_confirm": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_keyboard_confirm__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_list_item_not__last_child___am_list_line": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_list_item_not__last_child___am_list_line__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_menu__am_multi_select_btns__am_multi_select_btns_btn": {
      "position": "relative",
      "border": "none"
    },
    "html_not__data_scale____am_menu__am_multi_select_btns__am_multi_select_btns_btn__before": {
      "content": "''",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "200%",
      "height": "200%",
      "border": "1PX solid #ddd",
      "borderRadius": "0",
      "WebkitTransformOrigin": "0 0",
      "MsTransformOrigin": "0 0",
      "transformOrigin": "0 0",
      "WebkitTransform": "scale(0.5)",
      "MsTransform": "scale(0.5)",
      "transform": "scale(0.5)",
      "WebkitBoxSizing": "border-box",
      "boxSizing": "border-box",
      "pointerEvents": "none"
    },
    "html_not__data_scale____am_menu__am_flexbox__am_flexbox_item_only_child__am_list__am_list_item__am_list_line": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_menu__am_flexbox__am_flexbox_item_only_child__am_list__am_list_item__am_list_line__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_menu__am_flexbox__am_flexbox_item_only_child__am_list__am_list_item_last_child": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_menu__am_flexbox__am_flexbox_item_only_child__am_list__am_list_item_last_child__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_modal_button_group_h": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_modal_button_group_h__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_modal_button_group_h__am_modal_button_last_child": {
      "borderLeft": "none"
    },
    "html_not__data_scale____am_modal_button_group_h__am_modal_button_last_child__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "1PX",
      "height": "100%",
      "WebkitTransformOrigin": "100% 50%",
      "MsTransformOrigin": "100% 50%",
      "transformOrigin": "100% 50%",
      "WebkitTransform": "scaleX(0.5)",
      "MsTransform": "scaleX(0.5)",
      "transform": "scaleX(0.5)"
    },
    "html_not__data_scale____am_modal_button_group_v__am_modal_button": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_modal_button_group_v__am_modal_button__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_modal_input_container": {
      "position": "relative",
      "border": "none"
    },
    "html_not__data_scale____am_modal_input_container__before": {
      "content": "''",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "200%",
      "height": "200%",
      "border": "1PX solid #ddd",
      "borderRadius": "6px",
      "WebkitTransformOrigin": "0 0",
      "MsTransformOrigin": "0 0",
      "transformOrigin": "0 0",
      "WebkitTransform": "scale(0.5)",
      "MsTransform": "scale(0.5)",
      "transform": "scale(0.5)",
      "WebkitBoxSizing": "border-box",
      "boxSizing": "border-box",
      "pointerEvents": "none"
    },
    "html_not__data_scale____am_modal_input_nth_child_2": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_modal_input_nth_child_2___before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_body__am_modal_input_container": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_body__am_modal_input_container__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_popover__am_popover_item_not__first_child___am_popover_item_container": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_popover__am_popover_item_not__first_child___am_popover_item_container__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_result": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_result__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_tabs_default_bar_top__am_tabs_default_bar_tab": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_tabs_default_bar_top__am_tabs_default_bar_tab__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_tabs_default_bar_bottom__am_tabs_default_bar_tab": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_tabs_default_bar_bottom__am_tabs_default_bar_tab__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_tabs_default_bar_left__am_tabs_default_bar_tab": {
      "borderRight": "none"
    },
    "html_not__data_scale____am_tabs_default_bar_left__am_tabs_default_bar_tab__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "0",
      "bottom": "auto",
      "left": "auto",
      "width": "1PX",
      "height": "100%",
      "background": "#ddd",
      "WebkitTransformOrigin": "100% 50%",
      "MsTransformOrigin": "100% 50%",
      "transformOrigin": "100% 50%",
      "WebkitTransform": "scaleX(0.5)",
      "MsTransform": "scaleX(0.5)",
      "transform": "scaleX(0.5)"
    },
    "html_not__data_scale____am_tabs_default_bar_right__am_tabs_default_bar_tab": {
      "borderLeft": "none"
    },
    "html_not__data_scale____am_tabs_default_bar_right__am_tabs_default_bar_tab__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "1PX",
      "height": "100%",
      "WebkitTransformOrigin": "100% 50%",
      "MsTransformOrigin": "100% 50%",
      "transformOrigin": "100% 50%",
      "WebkitTransform": "scaleX(0.5)",
      "MsTransform": "scaleX(0.5)",
      "transform": "scaleX(0.5)"
    },
    "html_not__data_scale____am_tab_bar_bar": {
      "borderTop": "none"
    },
    "html_not__data_scale____am_tab_bar_bar__before": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "0",
      "right": "auto",
      "bottom": "auto",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 50%",
      "MsTransformOrigin": "50% 50%",
      "transformOrigin": "50% 50%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    },
    "html_not__data_scale____am_tag_normal": {
      "position": "relative",
      "border": "none"
    },
    "html_not__data_scale____am_tag_normal__before": {
      "content": "''",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "200%",
      "height": "200%",
      "border": "1PX solid #ddd",
      "borderRadius": "6px",
      "WebkitTransformOrigin": "0 0",
      "MsTransformOrigin": "0 0",
      "transformOrigin": "0 0",
      "WebkitTransform": "scale(0.5)",
      "MsTransform": "scale(0.5)",
      "transform": "scale(0.5)",
      "WebkitBoxSizing": "border-box",
      "boxSizing": "border-box",
      "pointerEvents": "none"
    },
    "html_not__data_scale____am_tag_active": {
      "position": "relative",
      "border": "none"
    },
    "html_not__data_scale____am_tag_active__before": {
      "content": "''",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "200%",
      "height": "200%",
      "border": "1PX solid #108ee9",
      "borderRadius": "6px",
      "WebkitTransformOrigin": "0 0",
      "MsTransformOrigin": "0 0",
      "transformOrigin": "0 0",
      "WebkitTransform": "scale(0.5)",
      "MsTransform": "scale(0.5)",
      "transform": "scale(0.5)",
      "WebkitBoxSizing": "border-box",
      "boxSizing": "border-box",
      "pointerEvents": "none"
    },
    "html_not__data_scale____am_tag_disabled": {
      "position": "relative",
      "border": "none"
    },
    "html_not__data_scale____am_tag_disabled__before": {
      "content": "''",
      "position": "absolute",
      "left": "0",
      "top": "0",
      "width": "200%",
      "height": "200%",
      "border": "1PX solid #ddd",
      "borderRadius": "6px",
      "WebkitTransformOrigin": "0 0",
      "MsTransformOrigin": "0 0",
      "transformOrigin": "0 0",
      "WebkitTransform": "scale(0.5)",
      "MsTransform": "scale(0.5)",
      "transform": "scale(0.5)",
      "WebkitBoxSizing": "border-box",
      "boxSizing": "border-box",
      "pointerEvents": "none"
    },
    "html_not__data_scale____am_list__am_list_item_am_textarea_item": {
      "borderBottom": "none"
    },
    "html_not__data_scale____am_list__am_list_item_am_textarea_item__after": {
      "content": "''",
      "position": "absolute",
      "backgroundColor": "#ddd",
      "display": "block",
      "zIndex": "1",
      "top": "auto",
      "right": "auto",
      "bottom": "0",
      "left": "0",
      "width": "100%",
      "height": "1PX",
      "WebkitTransformOrigin": "50% 100%",
      "MsTransformOrigin": "50% 100%",
      "transformOrigin": "50% 100%",
      "WebkitTransform": "scaleY(0.5)",
      "MsTransform": "scaleY(0.5)",
      "transform": "scaleY(0.5)"
    }
  },
  "@media (-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3), (min-resolution: 2dppx) and (min-resolution: 3dppx)": {
    "__expression__": "(-webkit-min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 3), (min-resolution: 2dppx) and (min-resolution: 3dppx)",
    "html_not__data_scale____am_accordion__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_accordion__am_accordion_item__am_accordion_header__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_accordion__am_accordion_item__am_accordion_content__am_accordion_content_box__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_action_sheet_button_list_item__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_action_sheet_button_list__am_action_sheet_cancel_button_mask__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_action_sheet_button_list__am_action_sheet_cancel_button_mask__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_action_sheet_share_list__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_action_sheet_share_cancel_button__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_picker_col_indicator__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_picker_col_indicator__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_picker_popup_header__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_card_am_card_full__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_card_am_card_full__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_card_body__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_list_body__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_list_body__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_list_body_div_not__last_child___am_list_line__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_grid_am_grid_line_not__am_grid_carousel___before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_grid_am_grid_line_not__am_grid_carousel___after": {
      "WebkitTransform": "scaleX(0.33)",
      "MsTransform": "scaleX(0.33)",
      "transform": "scaleX(0.33)"
    },
    "html_not__data_scale____am_grid_am_grid_line__am_flexbox__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_grid_am_grid_line__am_flexbox__am_flexbox_item_first_child__before": {
      "WebkitTransform": "scaleX(0.33)",
      "MsTransform": "scaleX(0.33)",
      "transform": "scaleX(0.33)"
    },
    "html_not__data_scale____am_grid_am_grid_line__am_flexbox__am_flexbox_item_not__last_child___after": {
      "WebkitTransform": "scaleX(0.33)",
      "MsTransform": "scaleX(0.33)",
      "transform": "scaleX(0.33)"
    },
    "html_not__data_scale____am_grid_am_grid_line_am_grid_carousel__am_grid_carousel_page__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_grid_am_grid_line_am_grid_carousel__am_grid_carousel_page__after": {
      "WebkitTransform": "scaleX(0.33)",
      "MsTransform": "scaleX(0.33)",
      "transform": "scaleX(0.33)"
    },
    "html_not__data_scale____am_number_keyboard_wrapper_table__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_not__keyboard_confirm___before": {
      "WebkitTransform": "scaleX(0.33)",
      "MsTransform": "scaleX(0.33)",
      "transform": "scaleX(0.33)"
    },
    "html_not__data_scale____am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_not__keyboard_confirm___after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_keyboard_confirm__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_list_item_not__last_child___am_list_line__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_menu__am_flexbox__am_flexbox_item_only_child__am_list__am_list_item__am_list_line__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_menu__am_flexbox__am_flexbox_item_only_child__am_list__am_list_item_last_child__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_modal_button_group_h__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_modal_button_group_h__am_modal_button_last_child__before": {
      "WebkitTransform": "scaleX(0.33)",
      "MsTransform": "scaleX(0.33)",
      "transform": "scaleX(0.33)"
    },
    "html_not__data_scale____am_modal_button_group_v__am_modal_button__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_modal_input_nth_child_2___before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_body__am_modal_input_container__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_popover__am_popover_item_not__first_child___am_popover_item_container__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_result__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_tabs_default_bar_top__am_tabs_default_bar_tab__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_tabs_default_bar_bottom__am_tabs_default_bar_tab__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_tabs_default_bar_left__am_tabs_default_bar_tab__after": {
      "WebkitTransform": "scaleX(0.33)",
      "MsTransform": "scaleX(0.33)",
      "transform": "scaleX(0.33)"
    },
    "html_not__data_scale____am_tabs_default_bar_right__am_tabs_default_bar_tab__before": {
      "WebkitTransform": "scaleX(0.33)",
      "MsTransform": "scaleX(0.33)",
      "transform": "scaleX(0.33)"
    },
    "html_not__data_scale____am_tab_bar_bar__before": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    },
    "html_not__data_scale____am_list__am_list_item_am_textarea_item__after": {
      "WebkitTransform": "scaleY(0.33)",
      "MsTransform": "scaleY(0.33)",
      "transform": "scaleY(0.33)"
    }
  },
  "am_accordion_anim_active": {
    "WebkitTransition": "all 0.2s ease-out",
    "transition": "all 0.2s ease-out"
  },
  "am_accordion__am_accordion_item__am_accordion_header": {
    "position": "relative",
    "color": "#000",
    "fontSize": "17px",
    "height": "44px",
    "lineHeight": "44px",
    "backgroundColor": "#fff",
    "WebkitBoxSizing": "content-box",
    "boxSizing": "content-box",
    "paddingLeft": "15px",
    "paddingRight": "30px",
    "borderBottom": "1PX solid #ddd",
    "width": "auto",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "am_accordion__am_accordion_item__am_accordion_header_i": {
    "position": "absolute",
    "display": "block",
    "top": "15px",
    "right": "15px",
    "width": "15px",
    "height": "15px",
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2216%22%20height%3D%2226%22%20viewBox%3D%220%200%2016%2026%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%20id%3D%22UI-KIT_%E5%9F%BA%E7%A1%80%E5%85%83%E4%BB%B6%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%229.9%E5%9F%BA%E7%A1%80%E5%85%83%E4%BB%B6%22%20transform%3D%22translate(-5809.000000%2C%20-8482.000000)%22%20fill%3D%22%23C7C7CC%22%3E%3Cpolygon%20id%3D%22Disclosure-Indicator%22%20points%3D%225811%208482%205809%208484%205820.5%208495%205809%208506%205811%208508%205825%208495%22%3E%3C%2Fpolygon%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\")",
    "backgroundSize": "contain",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "50% 50%",
    "WebkitTransform": "rotate(90deg)",
    "MsTransform": "rotate(90deg)",
    "transform": "rotate(90deg)",
    "WebkitTransition": "-webkit-transform .2s ease",
    "transition": "transform .2s ease, -webkit-transform .2s ease"
  },
  "am_accordion__am_accordion_item__am_accordion_header_aria_expanded___true___i": {
    "WebkitTransform": "rotate(270deg)",
    "MsTransform": "rotate(270deg)",
    "transform": "rotate(270deg)"
  },
  "am_accordion__am_accordion_item__am_accordion_content": {
    "overflow": "hidden",
    "background": "#fff"
  },
  "am_accordion__am_accordion_item__am_accordion_content__am_accordion_content_box": {
    "fontSize": "15px",
    "color": "#333",
    "position": "relative",
    "borderBottom": "1PX solid #ddd"
  },
  "am_accordion__am_accordion_item__am_accordion_content__am_accordion_content_box__am_list_body": {
    "borderTop": "0"
  },
  "am_accordion__am_accordion_item__am_accordion_content__am_accordion_content_box__am_list_body_before": {
    "display": "none !important"
  },
  "am_accordion__am_accordion_item__am_accordion_content_am_accordion_content_inactive": {
    "display": "none"
  },
  "am_badge": {
    "position": "relative",
    "display": "inline-block",
    "lineHeight": "1",
    "verticalAlign": "middle"
  },
  "am_badge_text": {
    "textRendering": "optimizeLegibility",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale",
    "position": "absolute",
    "top": "-6px",
    "height": "18px",
    "lineHeight": "18px",
    "minWidth": "9px",
    "borderRadius": "12px",
    "padding": "0 5px",
    "textAlign": "center",
    "fontSize": "12px",
    "color": "#fff",
    "backgroundColor": "#ff5b05",
    "whiteSpace": "nowrap",
    "WebkitTransform": "translateX(-45%)",
    "MsTransform": "translateX(-45%)",
    "transform": "translateX(-45%)",
    "WebkitTransformOrigin": "-10% center",
    "MsTransformOrigin": "-10% center",
    "transformOrigin": "-10% center",
    "zIndex": "10",
    "fontFamily": "\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"\\5FAE\\8F6F\\96C5\\9ED1\", SimSun, sans-serif"
  },
  "am_badge_text_a": {
    "color": "#fff"
  },
  "am_badge_text_p": {
    "margin": "0",
    "padding": "0"
  },
  "am_badge_hot__am_badge_text": {
    "backgroundColor": "#f96268"
  },
  "am_badge_dot": {
    "position": "absolute",
    "WebkitTransform": "translateX(-50%)",
    "MsTransform": "translateX(-50%)",
    "transform": "translateX(-50%)",
    "WebkitTransformOrigin": "0 center",
    "MsTransformOrigin": "0 center",
    "transformOrigin": "0 center",
    "top": "-4px",
    "height": "8px",
    "width": "8px",
    "borderRadius": "100%",
    "background": "#ff5b05",
    "zIndex": "10"
  },
  "am_badge_dot_large": {
    "height": "16px",
    "width": "16px"
  },
  "am_badge_not_a_wrapper__am_badge_text": {
    "top": "auto",
    "display": "block",
    "position": "relative",
    "WebkitTransform": "translateX(0)",
    "MsTransform": "translateX(0)",
    "transform": "translateX(0)"
  },
  "am_badge_not_a_wrapper__am_badge_dot": {
    "top": "auto",
    "display": "block",
    "position": "relative",
    "WebkitTransform": "translateX(0)",
    "MsTransform": "translateX(0)",
    "transform": "translateX(0)"
  },
  "am_badge_corner": {
    "width": "80px",
    "padding": "8px",
    "position": "absolute",
    "right": "-32px",
    "top": "8px",
    "backgroundColor": "#ff5b05",
    "color": "#fff",
    "whiteSpace": "nowrap",
    "WebkitTransform": "rotate(45deg)",
    "MsTransform": "rotate(45deg)",
    "transform": "rotate(45deg)",
    "textAlign": "center",
    "fontSize": "15px"
  },
  "am_badge_corner_wrapper": {
    "overflow": "hidden"
  },
  "am_action_sheet_wrap": {
    "position": "fixed",
    "overflow": "auto",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0",
    "zIndex": "1000",
    "WebkitOverflowScrolling": "touch",
    "outline": "0"
  },
  "am_action_sheet_mask": {
    "position": "fixed",
    "top": "0",
    "right": "0",
    "left": "0",
    "bottom": "0",
    "backgroundColor": "rgba(0, 0, 0, 0.4)",
    "height": "100%",
    "zIndex": "1000"
  },
  "am_action_sheet_mask_hidden": {
    "display": "none"
  },
  "am_action_sheet_close": {
    "display": "none"
  },
  "am_action_sheet": {
    "position": "fixed",
    "left": "0",
    "bottom": "0",
    "width": "100%",
    "backgroundColor": "#fff",
    "paddingBottom": "env(safe-area-inset-bottom)"
  },
  "am_action_sheet_am_action_sheet_share": {
    "backgroundColor": "#f2f2f2"
  },
  "am_action_sheet_title": {
    "fontSize": "17px"
  },
  "am_action_sheet_message": {
    "color": "#888",
    "fontSize": "14px"
  },
  "am_action_sheet_button_list": {
    "textAlign": "center",
    "color": "#000"
  },
  "am_action_sheet_button_list_item": {
    "fontSize": "18px",
    "padding": "0 8px",
    "margin": "0",
    "position": "relative",
    "height": "50px",
    "lineHeight": "50px",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis",
    "overflowX": "hidden",
    "borderTop": "1PX solid #ddd"
  },
  "am_action_sheet_button_list_item_am_action_sheet_button_list_item_active": {
    "backgroundColor": "#ddd"
  },
  "am_action_sheet_button_list_badge": {
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center"
  },
  "am_action_sheet_button_list_badge__am_badge": {
    "marginLeft": "8px",
    "WebkitFlexShrink": "0",
    "MsFlexNegative": "0",
    "flexShrink": "0"
  },
  "am_action_sheet_button_list_item_content": {
    "display": "inline-block",
    "whiteSpace": "nowrap",
    "overflow": "hidden",
    "textOverflow": "ellipsis"
  },
  "am_action_sheet_button_list__am_action_sheet_cancel_button": {
    "paddingTop": "6px",
    "position": "relative"
  },
  "am_action_sheet_button_list__am_action_sheet_cancel_button_mask": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "6px",
    "backgroundColor": "#e7e7ed",
    "borderTop": "1PX solid #ddd",
    "borderBottom": "1PX solid #ddd"
  },
  "am_action_sheet_button_list__am_action_sheet_destructive_button": {
    "color": "#f4333c"
  },
  "am_action_sheet_share_list": {
    "display": "flex",
    "position": "relative",
    "borderTop": "1PX solid #ddd",
    "padding": "21px 0 21px 15px",
    "overflowY": "scroll",
    "WebkitOverflowScrolling": "touch"
  },
  "am_action_sheet_share_list_item": {
    "WebkitBoxFlex": "0",
    "WebkitFlex": "none",
    "MsFlex": "none",
    "flex": "none",
    "margin": "0 12px 0 0"
  },
  "am_action_sheet_share_list_item_icon": {
    "marginBottom": "9px",
    "width": "60px",
    "height": "60px",
    "backgroundColor": "#fff",
    "borderRadius": "3px",
    "display": "flex",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_action_sheet_share_list_item_title": {
    "color": "#888",
    "fontSize": "10px",
    "textAlign": "center"
  },
  "am_action_sheet_share_cancel_button": {
    "height": "50px",
    "lineHeight": "50px",
    "textAlign": "center",
    "backgroundColor": "#fff",
    "color": "#000",
    "fontSize": "18px",
    "position": "relative",
    "borderTop": "1PX solid #ddd",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box"
  },
  "am_action_sheet_share_cancel_button_am_action_sheet_share_cancel_button_active": {
    "backgroundColor": "#ddd"
  },
  "am_activity_indicator": {
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "zIndex": "99"
  },
  "am_activity_indicator_spinner": {
    "display": "inline-block",
    "width": "20px",
    "height": "20px",
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-2.125%20-1.875%2064%2064%22%3E%3Cpath%20fill%3D%22%23CCC%22%20d%3D%22M29.875-1.875c-17.673%200-32%2014.327-32%2032s14.327%2032%2032%2032%2032-14.327%2032-32-14.327-32-32-32zm0%2060.7c-15.85%200-28.7-12.85-28.7-28.7s12.85-28.7%2028.7-28.7%2028.7%2012.85%2028.7%2028.7-12.85%2028.7-28.7%2028.7z%22%2F%3E%3Cpath%20fill%3D%22%23108ee9%22%20d%3D%22M61.858%2030.34c.003-.102.008-.203.008-.305%200-11.43-5.996-21.452-15.01-27.113l-.013.026c-.24-.137-.515-.22-.81-.22-.912%200-1.65.738-1.65%201.65%200%20.654.384%201.215.937%201.482%207.963%205.1%2013.247%2014.017%2013.247%2024.176%200%20.147-.01.293-.01.44h.022c0%20.01-.004.02-.004.03%200%20.91.74%201.65%201.65%201.65s1.65-.74%201.65-1.65c0-.06-.012-.112-.018-.167z%22%2F%3E%3C%2Fsvg%3E\")",
    "backgroundPosition": "50%",
    "backgroundSize": "100%",
    "backgroundRepeat": "no-repeat",
    "WebkitAnimation": "spinner-anime 1s linear infinite",
    "animation": "spinner-anime 1s linear infinite"
  },
  "am_activity_indicator_tip": {
    "fontSize": "14px",
    "marginLeft": "8px",
    "color": "#000",
    "opacity": "0.4"
  },
  "am_activity_indicator_am_activity_indicator_toast": {
    "position": "fixed",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "textAlign": "center",
    "zIndex": "1999"
  },
  "am_activity_indicator_am_activity_indicator_toast__am_activity_indicator_spinner": {
    "margin": "0"
  },
  "am_activity_indicator_am_activity_indicator_toast__am_activity_indicator_toast": {
    "display": "inline-block",
    "position": "relative",
    "top": "4px"
  },
  "am_activity_indicator_content": {
    "display": "flex",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "padding": "15px 15px",
    "borderRadius": "7px",
    "backgroundClip": "padding-box",
    "color": "#fff",
    "backgroundColor": "rgba(58, 58, 58, 0.9)",
    "fontSize": "15px",
    "lineHeight": "20px"
  },
  "am_activity_indicator_spinner_lg": {
    "width": "32px",
    "height": "32px"
  },
  "am_icon": {
    "fill": "currentColor",
    "backgroundSize": "cover",
    "width": "22px",
    "height": "22px"
  },
  "am_icon_xxs": {
    "width": "15px",
    "height": "15px"
  },
  "am_icon_xs": {
    "width": "18px",
    "height": "18px"
  },
  "am_icon_sm": {
    "width": "21px",
    "height": "21px"
  },
  "am_icon_md": {
    "width": "22px",
    "height": "22px"
  },
  "am_icon_lg": {
    "width": "36px",
    "height": "36px"
  },
  "am_icon_loading": {
    "WebkitAnimation": "cirle-anim 1s linear infinite",
    "animation": "cirle-anim 1s linear infinite"
  },
  "am_button": {
    "display": "block",
    "outline": "0 none",
    "WebkitAppearance": "none",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "padding": "0",
    "textAlign": "center",
    "fontSize": "18px",
    "height": "47px",
    "lineHeight": "47px",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "wordBreak": "break-word",
    "whiteSpace": "nowrap",
    "color": "#000",
    "backgroundColor": "#fff",
    "border": "1PX solid #ddd",
    "borderRadius": "5px"
  },
  "am_button_borderfix_before": {
    "WebkitTransform": "scale(0.49) !important",
    "MsTransform": "scale(0.49) !important",
    "transform": "scale(0.49) !important"
  },
  "am_button_am_button_active": {
    "backgroundColor": "#ddd"
  },
  "am_button_am_button_disabled": {
    "color": "rgba(0, 0, 0, 0.3)",
    "opacity": "0.6"
  },
  "am_button_primary": {
    "color": "#fff",
    "backgroundColor": "#108ee9",
    "border": "1PX solid #108ee9",
    "borderRadius": "5px"
  },
  "am_button_primary_am_button_active": {
    "color": "rgba(255, 255, 255, 0.3)",
    "backgroundColor": "#0e80d2"
  },
  "am_button_primary_am_button_disabled": {
    "color": "rgba(255, 255, 255, 0.6)",
    "opacity": "0.4"
  },
  "am_button_ghost": {
    "color": "#108ee9",
    "backgroundColor": "transparent",
    "border": "1PX solid #108ee9",
    "borderRadius": "5px"
  },
  "am_button_ghost_am_button_active": {
    "color": "rgba(16, 142, 233, 0.6)",
    "backgroundColor": "transparent",
    "border": "1PX solid rgba(16, 142, 233, 0.6)",
    "borderRadius": "5px"
  },
  "am_button_ghost_am_button_disabled": {
    "color": "rgba(0, 0, 0, 0.1)",
    "border": "1PX solid rgba(0, 0, 0, 0.1)",
    "borderRadius": "5px",
    "opacity": "1"
  },
  "am_button_warning": {
    "color": "#fff",
    "backgroundColor": "#e94f4f"
  },
  "am_button_warning_am_button_active": {
    "color": "rgba(255, 255, 255, 0.3)",
    "backgroundColor": "#d24747"
  },
  "am_button_warning_am_button_disabled": {
    "color": "rgba(255, 255, 255, 0.6)",
    "opacity": "0.4"
  },
  "am_button_inline": {
    "display": "inline-block",
    "padding": "0 15px"
  },
  "am_button_inline_am_button_icon": {
    "display": "inline-flex"
  },
  "am_button_small": {
    "fontSize": "13px",
    "height": "30px",
    "lineHeight": "30px",
    "padding": "0 15px"
  },
  "am_button_icon": {
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center"
  },
  "am_button____am_button_icon": {
    "marginRight": "0.5em"
  },
  "am_picker_col": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1"
  },
  "am_picker_col_content": {
    "position": "absolute",
    "left": "0",
    "top": "0",
    "width": "100%",
    "zIndex": "1",
    "padding": "102px 0"
  },
  "am_picker_col_item": {
    "MsTouchAction": "manipulation",
    "touchAction": "manipulation",
    "textAlign": "center",
    "fontSize": "16px",
    "height": "34px",
    "lineHeight": "34px",
    "color": "#000",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "am_picker_col_item_selected": {
    "fontSize": "17px"
  },
  "am_picker_col_mask": {
    "position": "absolute",
    "left": "0",
    "top": "0",
    "height": "100%",
    "margin": "0 auto",
    "width": "100%",
    "zIndex": "3",
    "backgroundImage": "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6))",
    "backgroundPosition": "top, bottom",
    "backgroundSize": "100% 102px",
    "backgroundRepeat": "no-repeat"
  },
  "am_picker_col_indicator": {
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "width": "100%",
    "height": "34px",
    "position": "absolute",
    "left": "0",
    "top": "102px",
    "zIndex": "3",
    "borderTop": "1PX solid #ddd",
    "borderBottom": "1PX solid #ddd"
  },
  "am_picker": {
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_picker_item": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "textAlign": "center"
  },
  "am_picker_popup": {
    "left": "0",
    "bottom": "0",
    "position": "fixed",
    "width": "100%",
    "backgroundColor": "#fff",
    "paddingBottom": "env(safe-area-inset-bottom)"
  },
  "am_picker_popup_wrap": {
    "position": "fixed",
    "overflow": "auto",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0",
    "zIndex": "1000",
    "WebkitOverflowScrolling": "touch",
    "outline": "0",
    "WebkitTransform": "translateZ(1px)",
    "transform": "translateZ(1px)"
  },
  "am_picker_popup_mask": {
    "position": "fixed",
    "top": "0",
    "right": "0",
    "left": "0",
    "bottom": "0",
    "backgroundColor": "rgba(0, 0, 0, 0.4)",
    "height": "100%",
    "zIndex": "1000",
    "WebkitTransform": "translateZ(1px)",
    "transform": "translateZ(1px)"
  },
  "am_picker_popup_mask_hidden": {
    "display": "none"
  },
  "am_picker_popup_header": {
    "backgroundImage": "linear-gradient(to bottom, #e7e7e7, #e7e7e7, transparent, transparent)",
    "backgroundPosition": "bottom",
    "backgroundSize": "100% 1PX",
    "backgroundRepeat": "no-repeat",
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "position": "relative",
    "borderBottom": "1PX solid #ddd"
  },
  "am_picker_popup_header__am_picker_popup_header_right": {
    "textAlign": "right"
  },
  "am_picker_popup_item": {
    "color": "#108ee9",
    "fontSize": "17px",
    "padding": "9px 15px",
    "height": "42px",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center"
  },
  "am_picker_popup_item_active": {
    "backgroundColor": "#ddd"
  },
  "am_picker_popup_title": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "textAlign": "center",
    "color": "#000"
  },
  "am_picker_popup__am_picker_popup_close": {
    "display": "none"
  },
  "am_calendar__animate": {
    "WebkitAnimationDuration": ".3s",
    "animationDuration": ".3s",
    "WebkitAnimationFillMode": "both",
    "animationFillMode": "both"
  },
  "am_calendar__fade_enter": {
    "WebkitAnimationName": "fadeIn",
    "animationName": "fadeIn"
  },
  "am_calendar__fade_leave": {
    "WebkitAnimationName": "fadeOut",
    "animationName": "fadeOut"
  },
  "am_calendar__slideV_enter": {
    "WebkitAnimationName": "slideInUp",
    "animationName": "slideInUp"
  },
  "am_calendar__slideV_leave": {
    "WebkitAnimationName": "slideInDown",
    "animationName": "slideInDown"
  },
  "am_calendar__slideH_enter": {
    "WebkitAnimationName": "slideInLeft",
    "animationName": "slideInLeft"
  },
  "am_calendar__slideH_leave": {
    "WebkitAnimationName": "slideInRight",
    "animationName": "slideInRight"
  },
  "am_calendar__mask": {
    "position": "fixed",
    "width": "100%",
    "height": "100%",
    "top": "0",
    "left": "0",
    "zIndex": "999",
    "background": "rgba(0, 0, 0, 0.5)"
  },
  "am_calendar__content": {
    "position": "fixed",
    "display": "flex",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column",
    "width": "100%",
    "height": "100%",
    "top": "0",
    "left": "0",
    "zIndex": "999",
    "background": "#fff"
  },
  "am_calendar__header": {
    "margin": "5px",
    "display": "flex",
    "WebkitFlexShrink": "0",
    "MsFlexNegative": "0",
    "flexShrink": "0",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_calendar__header__title": {
    "textAlign": "center",
    "width": "100%",
    "fontSize": "16px",
    "fontWeight": "bold"
  },
  "am_calendar__header__left": {
    "position": "absolute",
    "display": "flex",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "padding": "0 8px",
    "height": "24px",
    "left": "5px",
    "top": "5px",
    "color": "#068EEF"
  },
  "am_calendar__header__right": {
    "position": "absolute",
    "display": "flex",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "padding": "0 8px",
    "height": "24px",
    "right": "5px",
    "top": "5px",
    "color": "#068EEF",
    "fontSize": "14px"
  },
  "am_calendar__timePicker": {
    "borderTop": "1PX #ccc solid"
  },
  "am_calendar__week_panel": {
    "background": "#fff",
    "display": "flex",
    "WebkitFlexShrink": "0",
    "MsFlexNegative": "0",
    "flexShrink": "0",
    "padding": "0 2px",
    "borderBottom": "1PX #ddd solid"
  },
  "am_calendar__week_panel__cell": {
    "height": "24px",
    "display": "flex",
    "width": "14.28571429%",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "color": "#000",
    "fontSize": "14px"
  },
  "am_calendar__week_panel__cell_grey": {
    "color": "#bbb"
  },
  "am_calendar__date_picker": {
    "display": "flex",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column",
    "background": "#eee",
    "paddingBottom": "env(safe-area-inset-bottom)",
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "minHeight": "0"
  },
  "am_calendar__date_picker__wrapper": {
    "height": "auto",
    "position": "relative",
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "minHeight": "0"
  },
  "am_calendar__date_picker__months": {
    "background": "#fff"
  },
  "am_calendar__date_picker__load_tip": {
    "position": "absolute",
    "display": "flex",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "end",
    "WebkitAlignItems": "flex-end",
    "MsFlexAlign": "end",
    "alignItems": "flex-end",
    "left": "0",
    "right": "0",
    "padding": "10px 0",
    "top": "-40px",
    "color": "#bbb"
  },
  "am_calendar__confirm_panel": {
    "display": "flex",
    "WebkitFlexShrink": "0",
    "MsFlexNegative": "0",
    "flexShrink": "0",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "background": "#f7f7f7",
    "padding": "8px 15px",
    "borderTop": "#ddd 1PX solid"
  },
  "am_calendar__confirm_panel__info": {
    "fontSize": "12px"
  },
  "am_calendar__confirm_panel__info_p": {
    "margin": "0"
  },
  "am_calendar__confirm_panel__info_p___p": {
    "marginTop": "8px"
  },
  "am_calendar__confirm_panel__info__grey": {
    "color": "#bbb"
  },
  "am_calendar__confirm_panel__button": {
    "textAlign": "center",
    "width": "80px",
    "margin": "0 0 0 auto",
    "padding": "8px 0",
    "borderRadius": "5px",
    "color": "#fff",
    "fontSize": "18px",
    "background": "#108ee9"
  },
  "am_calendar__confirm_panel__button_disable": {
    "color": "#bbb",
    "background": "#ddd"
  },
  "am_calendar__confirm_panel__button_full": {
    "width": "100%",
    "textAlign": "center"
  },
  "am_calendar__time_picker": {
    "WebkitFlexShrink": "0",
    "MsFlexNegative": "0",
    "flexShrink": "0",
    "textAlign": "center",
    "background": "#fff"
  },
  "am_calendar__time_picker__title": {
    "display": "flex",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "height": "44px",
    "fontSize": "16px",
    "borderTop": "1PX #ddd solid",
    "borderBottom": "1PX #ddd solid"
  },
  "am_calendar__single_month": {
    "padding": "0"
  },
  "am_calendar__single_month__month_title": {
    "margin": "0",
    "padding": "21px 0 6px 15px"
  },
  "am_calendar__single_month__row": {
    "display": "flex",
    "WebkitBoxAlign": "baseline",
    "WebkitAlignItems": "baseline",
    "MsFlexAlign": "baseline",
    "alignItems": "baseline"
  },
  "am_calendar__single_month__row__cell": {
    "display": "flex",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column",
    "width": "14.28571429%",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_calendar__single_month__row__cell__date_wrapper": {
    "display": "flex",
    "height": "35px",
    "width": "100%",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "marginBottom": "2px"
  },
  "am_calendar__single_month__row__cell__date_wrapper__date": {
    "display": "flex",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "width": "35px",
    "height": "35px",
    "WebkitFlexShrink": "0",
    "MsFlexNegative": "0",
    "flexShrink": "0",
    "color": "#000",
    "fontSize": "17px",
    "fontWeight": "bold"
  },
  "am_calendar__single_month__row__cell__date_wrapper__disable": {
    "color": "#bbb",
    "background": "#eee",
    "border": "none",
    "borderRadius": "100%"
  },
  "am_calendar__single_month__row__cell__date_wrapper__grey": {
    "color": "#bbb"
  },
  "am_calendar__single_month__row__cell__date_wrapper__important": {
    "border": "1PX #ddd solid",
    "borderRadius": "100%"
  },
  "am_calendar__single_month__row__cell__date_wrapper__left": {
    "border": "none",
    "width": "100%",
    "height": "35px"
  },
  "am_calendar__single_month__row__cell__date_wrapper__right": {
    "border": "none",
    "width": "100%",
    "height": "35px"
  },
  "am_calendar__single_month__row__cell__date_wrapper__date_selected": {
    "border": "none",
    "background": "#108ee9",
    "color": "#fff",
    "fontSize": "17px"
  },
  "am_calendar__single_month__row__cell__date_wrapper__selected_start": {
    "borderRadius": "100% 0 0 100%"
  },
  "am_calendar__single_month__row__cell__date_wrapper__selected_single": {
    "borderRadius": "100%"
  },
  "am_calendar__single_month__row__cell__date_wrapper__selected_middle": {
    "borderRadius": "0"
  },
  "am_calendar__single_month__row__cell__date_wrapper__selected_end": {
    "borderRadius": "0 100% 100% 0"
  },
  "am_calendar__single_month__row__cell__info": {
    "height": "15px",
    "width": "100%",
    "padding": "0 5px",
    "fontSize": "10px",
    "color": "#888",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis",
    "overflow": "hidden",
    "textAlign": "center"
  },
  "am_calendar__single_month__row__cell__date_selected": {
    "color": "#108ee9"
  },
  "am_calendar__single_month__row____row": {
    "marginTop": "6px"
  },
  "am_calendar__single_month__row_xl____row_xl": {
    "marginTop": "21px"
  },
  "am_calendar__shortcut_panel": {
    "display": "flex",
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "row",
    "MsFlexDirection": "row",
    "flexDirection": "row",
    "WebkitFlexShrink": "0",
    "MsFlexNegative": "0",
    "flexShrink": "0",
    "WebkitBoxPack": "justify",
    "WebkitJustifyContent": "space-between",
    "MsFlexPack": "justify",
    "justifyContent": "space-between",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "padding": "0 30px",
    "borderTop": "#ddd 1PX solid",
    "height": "42px"
  },
  "am_calendar__shortcut_panel__item": {
    "display": "inline-block",
    "color": "#108ee9",
    "fontSize": "16px"
  },
  "am_card": {
    "minHeight": "96px",
    "paddingBottom": "6px",
    "display": "flex",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column",
    "backgroundColor": "#fff"
  },
  "am_card_not__am_card_full": {
    "border": "1PX solid #ddd",
    "borderRadius": "5px"
  },
  "am_card_am_card_full": {
    "position": "relative",
    "borderTop": "1PX solid #ddd",
    "borderBottom": "1PX solid #ddd"
  },
  "am_card_header": {
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "fontSize": "17px",
    "padding": "9px 15px"
  },
  "am_card_header_content": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "textAlign": "left",
    "color": "#000",
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_card_header_content_img": {
    "marginRight": "5px"
  },
  "am_card_header_extra": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "textAlign": "right",
    "fontSize": "17px",
    "color": "#888"
  },
  "am_card_body": {
    "position": "relative",
    "borderTop": "1PX solid #ddd",
    "padding": "15px 15px 6px",
    "fontSize": "15px",
    "color": "#333",
    "minHeight": "40px",
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1"
  },
  "am_card_footer": {
    "fontSize": "14px",
    "color": "#888",
    "padding": "0 15px",
    "display": "flex"
  },
  "am_card_footer_content": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1"
  },
  "am_card_footer_extra": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "textAlign": "right"
  },
  "am_carousel": {
    "position": "relative"
  },
  "am_carousel_wrap": {
    "fontSize": "18px",
    "color": "#000",
    "background": "none",
    "textAlign": "center",
    "zoom": "1",
    "width": "100%"
  },
  "am_carousel_wrap_dot": {
    "display": "inline-block",
    "zoom": "1"
  },
  "am_carousel_wrap_dot___span": {
    "display": "block",
    "width": "8px",
    "height": "8px",
    "margin": "0 3px",
    "borderRadius": "50%",
    "background": "#ccc"
  },
  "am_carousel_wrap_dot_active___span": {
    "background": "#888"
  },
  "am_list_header": {
    "padding": "15px 15px 9px 15px",
    "fontSize": "14px",
    "color": "#888",
    "width": "100%",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box"
  },
  "am_list_footer": {
    "padding": "9px 15px 15px 15px",
    "fontSize": "14px",
    "color": "#888"
  },
  "am_list_body": {
    "position": "relative",
    "backgroundColor": "#fff",
    "borderTop": "1PX solid #ddd",
    "borderBottom": "1PX solid #ddd"
  },
  "am_list_body_div_not__last_child___am_list_line": {
    "borderBottom": "1PX solid #ddd"
  },
  "am_list_item": {
    "position": "relative",
    "display": "flex",
    "paddingLeft": "15px",
    "minHeight": "44px",
    "backgroundColor": "#fff",
    "verticalAlign": "middle",
    "overflow": "hidden",
    "WebkitTransition": "background-color 200ms",
    "transition": "background-color 200ms",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_list_item__am_list_ripple": {
    "position": "absolute",
    "background": "transparent",
    "display": "inline-block",
    "overflow": "hidden",
    "willChange": "box-shadow, transform",
    "WebkitTransition": "background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1)",
    "transition": "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1)",
    "outline": "none",
    "cursor": "pointer",
    "borderRadius": "100%",
    "WebkitTransform": "scale(0)",
    "MsTransform": "scale(0)",
    "transform": "scale(0)"
  },
  "am_list_item__am_list_ripple_am_list_ripple_animate": {
    "backgroundColor": "rgba(158, 158, 158, 0.2)",
    "WebkitAnimation": "ripple 1s linear",
    "animation": "ripple 1s linear"
  },
  "am_list_item_am_list_item_top__am_list_line": {
    "WebkitBoxAlign": "start",
    "WebkitAlignItems": "flex-start",
    "MsFlexAlign": "start",
    "alignItems": "flex-start"
  },
  "am_list_item_am_list_item_top__am_list_line__am_list_arrow": {
    "marginTop": "2px"
  },
  "am_list_item_am_list_item_middle__am_list_line": {
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_list_item_am_list_item_bottom__am_list_line": {
    "WebkitBoxAlign": "end",
    "WebkitAlignItems": "flex-end",
    "MsFlexAlign": "end",
    "alignItems": "flex-end"
  },
  "am_list_item_am_list_item_error__am_list_line__am_list_extra": {
    "color": "#f50"
  },
  "am_list_item_am_list_item_error__am_list_line__am_list_extra__am_list_brief": {
    "color": "#f50"
  },
  "am_list_item_am_list_item_active": {
    "backgroundColor": "#ddd"
  },
  "am_list_item_am_list_item_disabled__am_list_line__am_list_content": {
    "color": "#bbb"
  },
  "am_list_item_am_list_item_disabled__am_list_line__am_list_extra": {
    "color": "#bbb"
  },
  "am_list_item_img": {
    "width": "22px",
    "height": "22px",
    "verticalAlign": "middle"
  },
  "am_list_item__am_list_thumb_first_child": {
    "marginRight": "15px"
  },
  "am_list_item__am_list_thumb_last_child": {
    "marginLeft": "8px"
  },
  "am_list_item__am_list_line": {
    "position": "relative",
    "display": "flex",
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "WebkitAlignSelf": "stretch",
    "MsFlexItemAlign": "stretch",
    "alignSelf": "stretch",
    "paddingRight": "15px",
    "overflow": "hidden"
  },
  "am_list_item__am_list_line__am_list_content": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "color": "#000",
    "fontSize": "17px",
    "lineHeight": "1.5",
    "textAlign": "left",
    "width": "auto",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "paddingTop": "7px",
    "paddingBottom": "7px"
  },
  "am_list_item__am_list_line__am_list_extra": {
    "WebkitFlexBasis": "36%",
    "MsFlexPreferredSize": "36%",
    "flexBasis": "36%",
    "color": "#888",
    "fontSize": "16px",
    "lineHeight": "1.5",
    "textAlign": "right",
    "width": "auto",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "paddingTop": "7px",
    "paddingBottom": "7px"
  },
  "am_list_item__am_list_line__am_list_title": {
    "width": "auto",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "am_list_item__am_list_line__am_list_brief": {
    "color": "#888",
    "fontSize": "15px",
    "lineHeight": "1.5",
    "marginTop": "6px",
    "width": "auto",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "am_list_item__am_list_line__am_list_arrow": {
    "display": "block",
    "width": "15px",
    "height": "15px",
    "marginLeft": "8px",
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2216%22%20height%3D%2226%22%20viewBox%3D%220%200%2016%2026%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%20id%3D%22UI-KIT_%E5%9F%BA%E7%A1%80%E5%85%83%E4%BB%B6%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%229.9%E5%9F%BA%E7%A1%80%E5%85%83%E4%BB%B6%22%20transform%3D%22translate(-5809.000000%2C%20-8482.000000)%22%20fill%3D%22%23C7C7CC%22%3E%3Cpolygon%20id%3D%22Disclosure-Indicator%22%20points%3D%225811%208482%205809%208484%205820.5%208495%205809%208506%205811%208508%205825%208495%22%3E%3C%2Fpolygon%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\")",
    "backgroundSize": "contain",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "50% 50%",
    "visibility": "hidden"
  },
  "am_list_item__am_list_line__am_list_arrow_horizontal": {
    "visibility": "visible"
  },
  "am_list_item__am_list_line__am_list_arrow_vertical": {
    "visibility": "visible",
    "WebkitTransform": "rotate(90deg)",
    "MsTransform": "rotate(90deg)",
    "transform": "rotate(90deg)"
  },
  "am_list_item__am_list_line__am_list_arrow_vertical_up": {
    "visibility": "visible",
    "WebkitTransform": "rotate(270deg)",
    "MsTransform": "rotate(270deg)",
    "transform": "rotate(270deg)"
  },
  "am_list_item__am_list_line_multiple": {
    "padding": "12.5px 15px 12.5px 0"
  },
  "am_list_item__am_list_line_multiple__am_list_content": {
    "paddingTop": "0",
    "paddingBottom": "0"
  },
  "am_list_item__am_list_line_multiple__am_list_extra": {
    "paddingTop": "0",
    "paddingBottom": "0"
  },
  "am_list_item__am_list_line_wrap__am_list_content": {
    "whiteSpace": "normal"
  },
  "am_list_item__am_list_line_wrap__am_list_extra": {
    "whiteSpace": "normal"
  },
  "am_list_item_select": {
    "position": "relative",
    "display": "block",
    "width": "100%",
    "height": "100%",
    "padding": "0",
    "border": "0",
    "fontSize": "17px",
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "backgroundColor": "transparent"
  },
  "am_checkbox": {
    "position": "relative",
    "display": "inline-block",
    "verticalAlign": "middle",
    "width": "21px",
    "height": "21px"
  },
  "am_checkbox_inner": {
    "position": "absolute",
    "right": "0",
    "width": "21px",
    "height": "21px",
    "border": "1px solid #ccc",
    "borderRadius": "50%",
    "WebkitTransform": "rotate(0deg)",
    "MsTransform": "rotate(0deg)",
    "transform": "rotate(0deg)",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box"
  },
  "am_checkbox_inner_after": {
    "position": "absolute",
    "display": "none",
    "top": "1.5px",
    "right": "6px",
    "zIndex": "999",
    "width": "5px",
    "height": "11px",
    "borderStyle": "solid",
    "borderWidth": "0 1px 1px 0",
    "content": "' '",
    "WebkitTransform": "rotate(45deg)",
    "MsTransform": "rotate(45deg)",
    "transform": "rotate(45deg)"
  },
  "am_checkbox_input": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "opacity": "0",
    "width": "100%",
    "height": "100%",
    "zIndex": "2",
    "border": "0 none",
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none"
  },
  "am_checkbox_am_checkbox_checked__am_checkbox_inner": {
    "borderColor": "#108ee9",
    "background": "#108ee9"
  },
  "am_checkbox_am_checkbox_checked__am_checkbox_inner_after": {
    "display": "block",
    "borderColor": "#fff"
  },
  "am_checkbox_am_checkbox_disabled": {
    "opacity": "0.3"
  },
  "am_checkbox_am_checkbox_disabled_am_checkbox_checked__am_checkbox_inner": {
    "borderColor": "#888",
    "background": "none"
  },
  "am_checkbox_am_checkbox_disabled_am_checkbox_checked__am_checkbox_inner_after": {
    "borderColor": "#888"
  },
  "am_list__am_list_item_am_checkbox_item__am_list_thumb": {
    "width": "21px",
    "height": "21px"
  },
  "am_list__am_list_item_am_checkbox_item__am_list_thumb__am_checkbox": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "0",
    "width": "100%",
    "height": "44px"
  },
  "am_list__am_list_item_am_checkbox_item__am_list_thumb__am_checkbox_inner": {
    "left": "15px",
    "top": "12px"
  },
  "am_list__am_list_item_am_checkbox_item_am_checkbox_item_disabled__am_list_content": {
    "color": "#bbb"
  },
  "am_checkbox_agree": {
    "position": "relative",
    "display": "flex",
    "WebkitBoxAlign": "stretch",
    "WebkitAlignItems": "stretch",
    "MsFlexAlign": "stretch",
    "alignItems": "stretch",
    "marginLeft": "15px",
    "paddingTop": "9px",
    "paddingBottom": "9px"
  },
  "am_checkbox_agree__am_checkbox": {
    "position": "absolute",
    "left": "0",
    "top": "0",
    "width": "30px",
    "height": "100%"
  },
  "am_checkbox_agree__am_checkbox_inner": {
    "left": "0",
    "top": "12px"
  },
  "am_checkbox_agree__am_checkbox_agree_label": {
    "display": "inline-block",
    "fontSize": "15px",
    "color": "#000",
    "lineHeight": "1.5",
    "marginLeft": "30px",
    "marginTop": "1PX"
  },
  "am_drawer": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "0",
    "overflow": "hidden"
  },
  "am_drawer_sidebar": {
    "zIndex": "4",
    "position": "absolute",
    "WebkitTransition": "-webkit-transform 0.3s ease-out",
    "transition": "transform 0.3s ease-out, -webkit-transform 0.3s ease-out",
    "willChange": "transform",
    "overflowY": "auto"
  },
  "am_drawer_draghandle": {
    "zIndex": "1",
    "position": "absolute",
    "backgroundColor": "rgba(50, 50, 50, 0.1)"
  },
  "am_drawer_overlay": {
    "zIndex": "3",
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "0",
    "opacity": "0",
    "visibility": "hidden",
    "WebkitTransition": "opacity 0.5s ease-out",
    "transition": "opacity 0.5s ease-out",
    "backgroundColor": "rgba(0, 0, 0, 0.4)"
  },
  "am_drawer_content": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "0",
    "overflow": "auto",
    "WebkitTransition": "left 0.3s ease-out, right 0.3s ease-out",
    "transition": "left 0.3s ease-out, right 0.3s ease-out"
  },
  "am_drawer_am_drawer_left__am_drawer_sidebar": {
    "left": "0",
    "WebkitTransform": "translateX(-100%)",
    "MsTransform": "translateX(-100%)",
    "transform": "translateX(-100%)"
  },
  "am_drawer_am_drawer_right__am_drawer_sidebar": {
    "right": "0",
    "WebkitTransform": "translateX(100%)",
    "MsTransform": "translateX(100%)",
    "transform": "translateX(100%)"
  },
  "am_drawer_am_drawer_left__am_drawer_draghandle": {
    "left": "0"
  },
  "am_drawer_am_drawer_right__am_drawer_draghandle": {
    "right": "0"
  },
  "am_drawer_am_drawer_top__am_drawer_sidebar": {
    "top": "0",
    "WebkitTransform": "translateY(-100%)",
    "MsTransform": "translateY(-100%)",
    "transform": "translateY(-100%)"
  },
  "am_drawer_am_drawer_bottom__am_drawer_sidebar": {
    "bottom": "0",
    "WebkitTransform": "translateY(100%)",
    "MsTransform": "translateY(100%)",
    "transform": "translateY(100%)"
  },
  "am_drawer_am_drawer_top__am_drawer_draghandle": {
    "top": "0"
  },
  "am_drawer_am_drawer_bottom__am_drawer_draghandle": {
    "bottom": "0"
  },
  "am_drawer_open_am_drawer_am_drawer_left__am_drawer_sidebar": {
    "WebkitBoxShadow": "1PX 1PX 2px rgba(0, 0, 0, 0.15)",
    "boxShadow": "1PX 1PX 2px rgba(0, 0, 0, 0.15)"
  },
  "am_drawer_open_am_drawer_am_drawer_right__am_drawer_sidebar": {
    "WebkitBoxShadow": "-1PX 1PX 2px rgba(0, 0, 0, 0.15)",
    "boxShadow": "-1PX 1PX 2px rgba(0, 0, 0, 0.15)"
  },
  "am_drawer_open_am_drawer_am_drawer_top__am_drawer_sidebar": {
    "WebkitBoxShadow": "1PX 1PX 2px rgba(0, 0, 0, 0.15)",
    "boxShadow": "1PX 1PX 2px rgba(0, 0, 0, 0.15)"
  },
  "am_drawer_open_am_drawer_am_drawer_bottom__am_drawer_sidebar": {
    "WebkitBoxShadow": "1PX -1PX 2px rgba(0, 0, 0, 0.15)",
    "boxShadow": "1PX -1PX 2px rgba(0, 0, 0, 0.15)"
  },
  "am_flexbox": {
    "textAlign": "left",
    "overflow": "hidden",
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_flexbox_am_flexbox_dir_row": {
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "row",
    "MsFlexDirection": "row",
    "flexDirection": "row"
  },
  "am_flexbox_am_flexbox_dir_row_reverse": {
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "reverse",
    "WebkitFlexDirection": "row-reverse",
    "MsFlexDirection": "row-reverse",
    "flexDirection": "row-reverse"
  },
  "am_flexbox_am_flexbox_dir_column": {
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column"
  },
  "am_flexbox_am_flexbox_dir_column__am_flexbox_item": {
    "marginLeft": "0"
  },
  "am_flexbox_am_flexbox_dir_column_reverse": {
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "reverse",
    "WebkitFlexDirection": "column-reverse",
    "MsFlexDirection": "column-reverse",
    "flexDirection": "column-reverse"
  },
  "am_flexbox_am_flexbox_dir_column_reverse__am_flexbox_item": {
    "marginLeft": "0"
  },
  "am_flexbox_am_flexbox_nowrap": {
    "WebkitFlexWrap": "nowrap",
    "MsFlexWrap": "nowrap",
    "flexWrap": "nowrap"
  },
  "am_flexbox_am_flexbox_wrap": {
    "WebkitFlexWrap": "wrap",
    "MsFlexWrap": "wrap",
    "flexWrap": "wrap"
  },
  "am_flexbox_am_flexbox_wrap_reverse": {
    "WebkitFlexWrap": "wrap-reverse",
    "MsFlexWrap": "wrap-reverse",
    "flexWrap": "wrap-reverse"
  },
  "am_flexbox_am_flexbox_justify_start": {
    "WebkitBoxPack": "start",
    "WebkitJustifyContent": "flex-start",
    "MsFlexPack": "start",
    "justifyContent": "flex-start"
  },
  "am_flexbox_am_flexbox_justify_end": {
    "WebkitBoxPack": "end",
    "WebkitJustifyContent": "flex-end",
    "MsFlexPack": "end",
    "justifyContent": "flex-end"
  },
  "am_flexbox_am_flexbox_justify_center": {
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center"
  },
  "am_flexbox_am_flexbox_justify_between": {
    "WebkitBoxPack": "justify",
    "WebkitJustifyContent": "space-between",
    "MsFlexPack": "justify",
    "justifyContent": "space-between"
  },
  "am_flexbox_am_flexbox_justify_around": {
    "WebkitJustifyContent": "space-around",
    "MsFlexPack": "distribute",
    "justifyContent": "space-around"
  },
  "am_flexbox_am_flexbox_align_start": {
    "WebkitBoxAlign": "start",
    "WebkitAlignItems": "flex-start",
    "MsFlexAlign": "start",
    "alignItems": "flex-start"
  },
  "am_flexbox_am_flexbox_align_end": {
    "WebkitBoxAlign": "end",
    "WebkitAlignItems": "flex-end",
    "MsFlexAlign": "end",
    "alignItems": "flex-end"
  },
  "am_flexbox_am_flexbox_align_center": {
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_flexbox_am_flexbox_align_stretch": {
    "WebkitBoxAlign": "stretch",
    "WebkitAlignItems": "stretch",
    "MsFlexAlign": "stretch",
    "alignItems": "stretch"
  },
  "am_flexbox_am_flexbox_align_baseline": {
    "WebkitBoxAlign": "baseline",
    "WebkitAlignItems": "baseline",
    "MsFlexAlign": "baseline",
    "alignItems": "baseline"
  },
  "am_flexbox_am_flexbox_align_content_start": {
    "WebkitAlignContent": "flex-start",
    "MsFlexLinePack": "start",
    "alignContent": "flex-start"
  },
  "am_flexbox_am_flexbox_align_content_end": {
    "WebkitAlignContent": "flex-end",
    "MsFlexLinePack": "end",
    "alignContent": "flex-end"
  },
  "am_flexbox_am_flexbox_align_content_center": {
    "WebkitAlignContent": "center",
    "MsFlexLinePack": "center",
    "alignContent": "center"
  },
  "am_flexbox_am_flexbox_align_content_between": {
    "WebkitAlignContent": "space-between",
    "MsFlexLinePack": "justify",
    "alignContent": "space-between"
  },
  "am_flexbox_am_flexbox_align_content_around": {
    "WebkitAlignContent": "space-around",
    "MsFlexLinePack": "distribute",
    "alignContent": "space-around"
  },
  "am_flexbox_am_flexbox_align_content_stretch": {
    "WebkitAlignContent": "stretch",
    "MsFlexLinePack": "stretch",
    "alignContent": "stretch"
  },
  "am_flexbox__am_flexbox_item": {
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "marginLeft": "8px",
    "minWidth": "10px"
  },
  "am_flexbox__am_flexbox_item_first_child": {
    "marginLeft": "0"
  },
  "am_grid__am_flexbox": {
    "background": "#fff"
  },
  "am_grid__am_flexbox__am_flexbox_item": {
    "marginLeft": "0"
  },
  "am_grid__am_flexbox__am_flexbox_item_am_grid_item": {
    "position": "relative"
  },
  "am_grid__am_flexbox__am_flexbox_item_am_grid_item_active__am_grid_item_content": {
    "backgroundColor": "#ddd"
  },
  "am_grid__am_flexbox__am_flexbox_item__am_grid_item_content": {
    "textAlign": "center",
    "width": "100%",
    "height": "100%",
    "padding": "15px 0"
  },
  "am_grid__am_flexbox__am_flexbox_item__am_grid_item_content__am_grid_item_inner_content": {
    "display": "flex",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_grid__am_flexbox__am_flexbox_item__am_grid_item_content__am_grid_item_inner_content__am_grid_icon": {
    "maxWidth": "100%"
  },
  "am_grid__am_flexbox__am_flexbox_item__am_grid_item_content__am_grid_item_inner_content__am_grid_text": {
    "marginTop": "9px",
    "fontSize": "12px",
    "color": "#000",
    "textAlign": "center"
  },
  "am_grid__am_flexbox__am_flexbox_item__am_grid_item_content__am_grid_item_inner_content_column_num_3__am_grid_text": {
    "fontSize": "16px"
  },
  "am_grid__am_flexbox__am_flexbox_item__am_grid_item_content__am_grid_item_inner_content_column_num_2__am_grid_text": {
    "marginTop": "15px",
    "fontSize": "18px"
  },
  "am_grid_am_grid_line": {
    "position": "relative"
  },
  "am_grid_am_grid_line_not__am_grid_carousel": {
    "borderTop": "1PX solid #ddd",
    "borderRight": "1PX solid #ddd"
  },
  "am_grid_am_grid_line__am_flexbox": {
    "position": "relative",
    "borderBottom": "1PX solid #ddd"
  },
  "am_grid_am_grid_line__am_flexbox__am_flexbox_item": {
    "position": "relative"
  },
  "am_grid_am_grid_line__am_flexbox__am_flexbox_item_first_child": {
    "borderLeft": "1PX solid #ddd"
  },
  "am_grid_am_grid_line__am_flexbox__am_flexbox_item_not__last_child": {
    "borderRight": "1PX solid #ddd"
  },
  "am_grid_am_grid_line_am_grid_carousel__am_grid_carousel_page": {
    "borderTop": "1PX solid #ddd",
    "borderRight": "1PX solid #ddd"
  },
  "am_grid__am_carousel__am_carousel_wrap_dot___span": {
    "background": "#dcdee3"
  },
  "am_grid__am_carousel__am_carousel_wrap_dot_active___span": {
    "background": "#0ae"
  },
  "am_grid_am_grid_square__am_grid_item_before": {
    "display": "block",
    "content": "' '",
    "paddingBottom": "100%"
  },
  "am_grid_am_grid_square__am_grid_item__am_grid_item_content": {
    "position": "absolute",
    "top": "50%",
    "WebkitTransform": "translateY(-50%)",
    "MsTransform": "translateY(-50%)",
    "transform": "translateY(-50%)"
  },
  "am_grid_am_grid_square__am_grid_item__am_grid_item_inner_content": {
    "height": "100%"
  },
  "am_grid_am_grid_square__am_grid_item__am_grid_item_inner_content__am_grid_icon": {
    "marginTop": "9px",
    "width": "28%!important"
  },
  "am_image_picker_list": {
    "padding": "9px 8px 0",
    "marginBottom": "15px"
  },
  "am_image_picker_list__am_flexbox": {
    "marginBottom": "6px"
  },
  "am_image_picker_list__am_flexbox__am_flexbox_item": {
    "position": "relative",
    "marginRight": "5px",
    "marginLeft": "0"
  },
  "am_image_picker_list__am_flexbox__am_flexbox_item_after": {
    "display": "block",
    "content": "' '",
    "paddingBottom": "100%"
  },
  "am_image_picker_list__am_image_picker_item": {
    "position": "absolute",
    "top": "50%",
    "WebkitTransform": "translateY(-50%)",
    "MsTransform": "translateY(-50%)",
    "transform": "translateY(-50%)",
    "width": "100%",
    "height": "100%"
  },
  "am_image_picker_list__am_image_picker_item__am_image_picker_item_remove": {
    "width": "15px",
    "height": "15px",
    "position": "absolute",
    "right": "6px",
    "top": "6px",
    "textAlign": "right",
    "verticalAlign": "top",
    "zIndex": "2",
    "backgroundSize": "15px auto",
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'16'%20height%3D'16'%20viewBox%3D'0%200%2016%2016'%20version%3D'1.1'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20id%3D'Page-1'%20stroke%3D'none'%20stroke-width%3D'1'%20fill%3D'none'%20fill-rule%3D'evenodd'%3E%3Ccircle%20id%3D'Oval-98'%20fill-opacity%3D'0.4'%20fill%3D'%23404040'%20cx%3D'8'%20cy%3D'8'%20r%3D'8'%3E%3C%2Fcircle%3E%3Cpath%20d%3D'M11.8979743%2C11.8990375%20L11.8979743%2C11.8990375%20C11.7633757%2C12.0336542%2011.5447877%2C12.0336542%2011.4101891%2C11.8990375%20L8%2C8.48838931%20L4.5887341%2C11.8990375%20C4.45413554%2C12.0336542%204.23554748%2C12.0336542%204.10094892%2C11.8990375%20L4.10094892%2C11.8990375%20C3.96635036%2C11.7644208%203.96635036%2C11.5458033%204.10094892%2C11.4111866%20L7.51221482%2C8.00053847%20L4.10202571%2C4.58881335%20C3.96742715%2C4.45419667%203.96742715%2C4.23557919%204.10202571%2C4.10096251%20L4.10202571%2C4.10096251%20C4.23662427%2C3.96634583%204.45521233%2C3.96634583%204.58981089%2C4.10096251%20L8%2C7.51268762%20L11.4112659%2C4.10203944%20C11.5458645%2C3.96742276%2011.7644525%2C3.96742276%2011.8990511%2C4.10203944%20L11.8990511%2C4.10203944%20C12.0336496%2C4.23665612%2012.0336496%2C4.45527361%2011.8990511%2C4.58989029%20L8.48778518%2C8.00053847%20L11.8979743%2C11.4122636%20C12.0325729%2C11.5468803%2012.0325729%2C11.7644208%2011.8979743%2C11.8990375%20L11.8979743%2C11.8990375%20Z'%20id%3D'Shape'%20fill%3D'%23FFFFFF'%20transform%3D'translate(8.000000%2C%208.000000)%20scale(1%2C%20-1)%20translate(-8.000000%2C%20-8.000000)%20'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E\")"
  },
  "am_image_picker_list__am_image_picker_item__am_image_picker_item_content": {
    "height": "100%",
    "width": "100%",
    "borderRadius": "3px",
    "backgroundSize": "cover"
  },
  "am_image_picker_list__am_image_picker_item_img": {
    "width": "100%"
  },
  "am_image_picker_list__am_image_picker_upload_btn": {
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "borderRadius": "3px",
    "border": "1PX solid #ddd",
    "backgroundColor": "#fff"
  },
  "am_image_picker_list__am_image_picker_upload_btn_before": {
    "width": "1PX",
    "height": "25px",
    "content": "\" \"",
    "position": "absolute",
    "top": "50%",
    "left": "50%",
    "WebkitTransform": "translate(-50%, -50%)",
    "MsTransform": "translate(-50%, -50%)",
    "transform": "translate(-50%, -50%)",
    "backgroundColor": "#ccc"
  },
  "am_image_picker_list__am_image_picker_upload_btn_after": {
    "width": "25px",
    "height": "1PX"
  },
  "am_image_picker_list__am_image_picker_upload_btn_active": {
    "backgroundColor": "#ddd"
  },
  "am_image_picker_list__am_image_picker_upload_btn_input": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "bottom": "0",
    "right": "0",
    "opacity": "0"
  },
  "am_list_item__am_input_control__fake_input_container": {
    "height": "30px",
    "lineHeight": "30px",
    "position": "relative"
  },
  "am_list_item__am_input_control__fake_input_container__fake_input": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%",
    "paddingRight": "2px",
    "marginRight": "3px",
    "WebkitTextDecoration": "rtl",
    "textDecoration": "rtl",
    "textAlign": "right",
    "color": "#000",
    "fontSize": "17px",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "am_list_item__am_input_control__fake_input_container__fake_input_fake_input_disabled": {
    "color": "#bbb"
  },
  "am_list_item__am_input_control__fake_input_container__fake_input_focus": {
    "WebkitTransition": "color .2s",
    "transition": "color .2s"
  },
  "am_list_item__am_input_control__fake_input_container__fake_input_focus__before": {
    "content": "\"\""
  },
  "am_list_item__am_input_control__fake_input_container__fake_input_focus__after": {
    "content": "\"\"",
    "position": "absolute",
    "right": "1.5px",
    "top": "10%",
    "height": "80%",
    "borderRight": "1.5px solid #108ee9",
    "WebkitAnimation": "keyboard-cursor infinite 1s step-start",
    "animation": "keyboard-cursor infinite 1s step-start"
  },
  "am_list_item__am_input_control__fake_input_container__fake_input_placeholder": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "width": "100%",
    "height": "100%",
    "color": "#bbb",
    "textAlign": "right"
  },
  "am_list_item__am_input_control__fake_input_container_left__fake_input": {
    "textAlign": "left"
  },
  "am_list_item__am_input_control__fake_input_container_left__fake_input_focus_after": {
    "position": "static"
  },
  "am_list_item__am_input_control__fake_input_container_left__fake_input_placeholder": {
    "textAlign": "left"
  },
  "am_number_keyboard_wrapper": {
    "position": "fixed",
    "bottom": "0",
    "left": "0",
    "right": "0",
    "width": "100%",
    "zIndex": "10000",
    "fontFamily": "'PingFang SC'",
    "backgroundColor": "#f6f6f7",
    "WebkitTransitionDuration": "0.2s",
    "transitionDuration": "0.2s",
    "WebkitTransitionProperty": "-webkit-transform display",
    "transitionProperty": "transform display, -webkit-transform display",
    "WebkitTransform": "translateZ(0)",
    "transform": "translateZ(0)",
    "paddingBottom": "env(safe-area-inset-bottom)"
  },
  "am_number_keyboard_wrapper_am_number_keyboard_wrapper_hide": {
    "bottom": "-500px"
  },
  "am_number_keyboard_wrapper_table": {
    "width": "100%",
    "padding": "0",
    "margin": "0",
    "borderCollapse": "collapse",
    "borderTop": "1PX solid #ddd"
  },
  "am_number_keyboard_wrapper_table_tr": {
    "width": "100%",
    "padding": "0",
    "margin": "0"
  },
  "am_number_keyboard_wrapper_table_tr__am_number_keyboard_item": {
    "width": "25%",
    "padding": "0",
    "margin": "0",
    "height": "50px",
    "textAlign": "center",
    "fontSize": "25.5px",
    "color": "#2a2b2c",
    "position": "relative"
  },
  "am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_not__keyboard_confirm": {
    "borderLeft": "1PX solid #ddd",
    "borderBottom": "1PX solid #ddd"
  },
  "am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_am_number_keyboard_item_active": {
    "backgroundColor": "#ddd"
  },
  "am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_keyboard_confirm": {
    "color": "#fff",
    "fontSize": "21px",
    "backgroundColor": "#108ee9",
    "borderBottom": "1PX solid #ddd"
  },
  "am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_keyboard_confirm_am_number_keyboard_item_active": {
    "backgroundColor": "#0e80d2"
  },
  "am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_keyboard_confirm_am_number_keyboard_item_disabled": {
    "backgroundColor": "#0e80d2",
    "color": "rgba(255, 255, 255, 0.45)"
  },
  "am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_keyboard_delete": {
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22204%22%20height%3D%22148%22%20viewBox%3D%220%200%20153.000000%20111.000000%22%3E%3Cpath%20d%3D%22M46.9%204.7c-2.5%202.6-14.1%2015.5-25.8%2028.6L-.1%2057l25.6%2027%2025.7%2027.1%2047.4-.3%2047.4-.3%203.2-3.3%203.3-3.2V7l-3.3-3.2L146%20.5%2098.7.2%2051.5-.1l-4.6%204.8zm97.9%203.5c1.7%201.7%201.7%2092.9%200%2094.6-.9.9-12.6%201.2-46.3%201.2H53.4L31.2%2080.4%209%2056.9l5.1-5.7c2.8-3.1%2012.8-14.4%2022.2-24.9L53.5%207h45c33.8%200%2045.4.3%2046.3%201.2z%22%2F%3E%3Cpath%20d%3D%22M69.5%2031c-1.9%202.1-1.7%202.2%209.3%2013.3L90%2055.5%2078.8%2066.7%2067.5%2078l2.3%202.2%202.2%202.3%2011.3-11.3L94.5%2060l11.2%2011.2L117%2082.5l2.2-2.3%202.3-2.2-11.3-11.3L99%2055.5l11.2-11.2L121.5%2033l-2.3-2.2-2.2-2.3-11.3%2011.3L94.5%2051l-11-11c-6-6-11.2-11-11.6-11-.3%200-1.4.9-2.4%202z%22%2F%3E%3C%2Fsvg%3E\")",
    "backgroundSize": "25.5px 18.5px",
    "backgroundPosition": "50% 50%",
    "backgroundRepeat": "no-repeat"
  },
  "am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_keyboard_hide": {
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22260%22%20height%3D%22188%22%20viewBox%3D%220%200%20195.000000%20141.000000%22%3E%3Cpath%20d%3D%22M0%2057v57h195V0H0v57zm183%200v45H12V12h171v45z%22%2F%3E%3Cpath%20d%3D%22M21%2031.5V39h15V24H21v7.5zM48%2031.5V39h15V24H48v7.5zM75%2031.5V39h15V24H75v7.5zM102%2031.5V39h15V24h-15v7.5zM129%2031.5V39h15V24h-15v7.5zM156%2031.5V39h15V24h-15v7.5zM36%2055.5V63h15V48H36v7.5zM63%2055.5V63h15V48H63v7.5zM90%2055.5V63h15V48H90v7.5zM117%2055.5V63h15V48h-15v7.5zM144%2055.5V63h15V48h-15v7.5zM27%2079.5V87h15V72H27v7.5zM48%2079.5V87h96V72H48v7.5zM150%2079.5V87h15V72h-15v7.5zM81%20124.5c0%20.8.7%201.5%201.5%201.5s1.5.7%201.5%201.5.7%201.5%201.5%201.5%201.5.7%201.5%201.5.7%201.5%201.5%201.5%201.5.7%201.5%201.5.7%201.5%201.5%201.5%201.5.7%201.5%201.5.7%201.5%201.5%201.5%201.5.7%201.5%201.5.7%201.5%201.5%201.5%201.5-.7%201.5-1.5.7-1.5%201.5-1.5%201.5-.7%201.5-1.5.7-1.5%201.5-1.5%201.5-.7%201.5-1.5.7-1.5%201.5-1.5%201.5-.7%201.5-1.5.7-1.5%201.5-1.5%201.5-.7%201.5-1.5.7-1.5%201.5-1.5%201.5-.7%201.5-1.5c0-1.3-2.5-1.5-16.5-1.5s-16.5.2-16.5%201.5z%22%2F%3E%3C%2Fsvg%3E\")",
    "backgroundSize": "32.5px 23.5px",
    "backgroundPosition": "50% 50%",
    "backgroundRepeat": "no-repeat"
  },
  "am_number_keyboard_wrapper_table_tr__am_number_keyboard_item_disabled": {
    "color": "#bbb"
  },
  "am_list_item_am_input_item": {
    "height": "44px",
    "paddingLeft": "15px"
  },
  "am_list_item_not__last_child___am_list_line": {
    "borderBottom": "1PX solid #ddd"
  },
  "am_list_item__am_input_label": {
    "color": "#000",
    "fontSize": "17px",
    "marginLeft": "0",
    "marginRight": "5px",
    "textAlign": "left",
    "whiteSpace": "nowrap",
    "overflow": "hidden",
    "padding": "2px 0"
  },
  "am_list_item__am_input_label_am_input_label_2": {
    "width": "34px"
  },
  "am_list_item__am_input_label_am_input_label_3": {
    "width": "51px"
  },
  "am_list_item__am_input_label_am_input_label_4": {
    "width": "68px"
  },
  "am_list_item__am_input_label_am_input_label_5": {
    "width": "85px"
  },
  "am_list_item__am_input_label_am_input_label_6": {
    "width": "102px"
  },
  "am_list_item__am_input_label_am_input_label_7": {
    "width": "119px"
  },
  "am_list_item__am_input_control": {
    "fontSize": "17px",
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1"
  },
  "am_list_item__am_input_control_input": {
    "color": "#000",
    "fontSize": "17px",
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "width": "100%",
    "padding": "2px 0",
    "border": "0",
    "backgroundColor": "transparent",
    "lineHeight": "1",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box"
  },
  "am_list_item__am_input_control_input___webkit_input_placeholder": {
    "color": "#bbb",
    "lineHeight": "1.2"
  },
  "am_list_item__am_input_control_input___moz_placeholder": {
    "color": "#bbb",
    "lineHeight": "1.2"
  },
  "am_list_item__am_input_control_input___ms_input_placeholder": {
    "color": "#bbb",
    "lineHeight": "1.2"
  },
  "am_list_item__am_input_control_input__placeholder": {
    "color": "#bbb",
    "lineHeight": "1.2"
  },
  "am_list_item__am_input_control_input_disabled": {
    "color": "#bbb",
    "backgroundColor": "#fff"
  },
  "am_list_item__am_input_clear": {
    "display": "none",
    "width": "21px",
    "height": "21px",
    "borderRadius": "50%",
    "overflow": "hidden",
    "fontStyle": "normal",
    "color": "#fff",
    "backgroundColor": "#ccc",
    "backgroundRepeat": "no-repeat",
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D'%23fff'%20viewBox%3D'0%200%2030%2030'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z'%2F%3E%3Cpath%20d%3D'M0%200h24v24H0z'%20fill%3D'none'%2F%3E%3C%2Fsvg%3E\")",
    "backgroundSize": "21px auto",
    "backgroundPosition": "2px 2px"
  },
  "am_list_item__am_input_clear_active": {
    "backgroundColor": "#108ee9"
  },
  "am_list_item_am_input_focus__am_input_clear": {
    "display": "block"
  },
  "am_list_item__am_input_extra": {
    "WebkitBoxFlex": "initial",
    "WebkitFlex": "initial",
    "MsFlex": "initial",
    "flex": "initial",
    "minWidth": "0",
    "maxHeight": "21px",
    "overflow": "hidden",
    "paddingRight": "0",
    "lineHeight": "1",
    "color": "#888",
    "fontSize": "15px",
    "marginLeft": "5px"
  },
  "am_list_item_am_input_error__am_input_control_input": {
    "color": "#f50"
  },
  "am_list_item_am_input_error__am_input_error_extra": {
    "height": "21px",
    "width": "21px",
    "marginLeft": "6px",
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'18'%20height%3D'18'%20viewBox%3D'0%200%2018%2018'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke%3D'none'%20stroke-width%3D'1'%20fill%3D'none'%20fill-rule%3D'evenodd'%3E%3Cg%20transform%3D'translate(-300.000000%2C%20-1207.000000)'%20fill%3D'%23FF5500'%3E%3Cg%20id%3D'exclamation-circle-o'%20transform%3D'translate(300.000000%2C%201207.000000)'%3E%3Cpath%20d%3D'M9%2C16.734375%20C10.0441406%2C16.734375%2011.0566406%2C16.5304688%2012.009375%2C16.1279297%20C12.9304688%2C15.7376953%2013.7566406%2C15.1804687%2014.4685547%2C14.4703125%20C15.1787109%2C13.7601563%2015.7376953%2C12.9322266%2016.1261719%2C12.0111328%20C16.5304688%2C11.0566406%2016.734375%2C10.0441406%2016.734375%2C9%20C16.734375%2C7.95585938%2016.5304688%2C6.94335938%2016.1279297%2C5.990625%20C15.7376953%2C5.06953125%2015.1804687%2C4.24335938%2014.4703125%2C3.53144531%20C13.7601563%2C2.82128906%2012.9322266%2C2.26230469%2012.0111328%2C1.87382813%20C11.0566406%2C1.46953125%2010.0441406%2C1.265625%209%2C1.265625%20C7.95585938%2C1.265625%206.94335938%2C1.46953125%205.990625%2C1.87207031%20C5.06953125%2C2.26230469%204.24335938%2C2.81953125%203.53144531%2C3.5296875%20C2.82128906%2C4.23984375%202.26230469%2C5.06777344%201.87382813%2C5.98886719%20C1.46953125%2C6.94335938%201.265625%2C7.95585938%201.265625%2C9%20C1.265625%2C10.0441406%201.46953125%2C11.0566406%201.87207031%2C12.009375%20C2.26230469%2C12.9304688%202.81953125%2C13.7566406%203.5296875%2C14.4685547%20C4.23984375%2C15.1787109%205.06777344%2C15.7376953%205.98886719%2C16.1261719%20C6.94335938%2C16.5304688%207.95585938%2C16.734375%209%2C16.734375%20L9%2C16.734375%20Z%20M9%2C18%20C4.02890625%2C18%200%2C13.9710937%200%2C9%20C0%2C4.02890625%204.02890625%2C0%209%2C0%20C13.9710937%2C0%2018%2C4.02890625%2018%2C9%20C18%2C13.9710937%2013.9710937%2C18%209%2C18%20L9%2C18%20L9%2C18%20Z%20M9%2C6.75%20C8.61152344%2C6.75%208.296875%2C7.06464844%208.296875%2C7.453125%20L8.296875%2C13.9394531%20C8.296875%2C14.3279297%208.61152344%2C14.6425781%209%2C14.6425781%20C9.38847656%2C14.6425781%209.703125%2C14.3279297%209.703125%2C13.9394531%20L9.703125%2C7.453125%20C9.703125%2C7.06464844%209.38847656%2C6.75%209%2C6.75%20L9%2C6.75%20Z%20M8.20898438%2C4.83398438%20C8.20898438%2C5.27085024%208.56313413%2C5.625%209%2C5.625%20C9.43686587%2C5.625%209.79101562%2C5.27085024%209.79101562%2C4.83398438%20C9.79101562%2C4.39711851%209.43686587%2C4.04296875%209%2C4.04296875%20C8.56313413%2C4.04296875%208.20898438%2C4.39711851%208.20898438%2C4.83398438%20L8.20898438%2C4.83398438%20Z'%20id%3D'Shape'%20transform%3D'translate(9.000000%2C%209.000000)%20scale(1%2C%20-1)%20translate(-9.000000%2C%20-9.000000)%20'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\")",
    "backgroundSize": "21px auto"
  },
  "am_list_item_am_input_disabled__am_input_label": {
    "color": "#bbb"
  },
  "sr_only": {
    "position": "absolute",
    "width": "1px",
    "height": "1px",
    "padding": "0",
    "margin": "-1px",
    "overflow": "hidden",
    "clip": "rect(0, 0, 0, 0)",
    "whiteSpace": "nowrap",
    "border": "0"
  },
  "am_indexed_list_section_body_am_list_body": {
    "borderBottom": "0"
  },
  "am_indexed_list_section_body_am_list_body__am_list_item_last_child__am_list_line": {
    "borderBottom": "0"
  },
  "am_indexed_list_section_body_am_list_body_after": {
    "display": "none !important"
  },
  "am_indexed_list_section_body_am_list_body__am_list_item_last_child__am_list_line_after": {
    "display": "none !important"
  },
  "am_indexed_list_section_header_am_list_body": {
    "borderBottom": "0"
  },
  "am_indexed_list_section_header_am_list_body__am_list_item__am_list_line": {
    "borderBottom": "0"
  },
  "am_indexed_list_section_header_am_list_body_after": {
    "display": "none !important"
  },
  "am_indexed_list_section_header_am_list_body__am_list_item__am_list_line_after": {
    "display": "none !important"
  },
  "am_indexed_list_section_header__am_list_item": {
    "height": "30px",
    "minHeight": "30px",
    "backgroundColor": "#f5f5f9"
  },
  "am_indexed_list_section_header__am_list_item__am_list_line": {
    "height": "30px",
    "minHeight": "30px"
  },
  "am_indexed_list_section_header__am_list_item__am_list_content": {
    "fontSize": "14px !important",
    "color": "#888 !important"
  },
  "am_indexed_list_quick_search_bar": {
    "position": "fixed",
    "top": "0",
    "right": "0",
    "zIndex": "0",
    "textAlign": "center",
    "color": "#108ee9",
    "fontSize": "16px",
    "listStyle": "none",
    "padding": "0"
  },
  "am_indexed_list_quick_search_bar_li": {
    "padding": "0 5px"
  },
  "am_indexed_list_quick_search_bar_over": {
    "backgroundColor": "rgba(0, 0, 0, 0.4)"
  },
  "am_indexed_list_qsindicator": {
    "position": "absolute",
    "left": "50%",
    "top": "50%",
    "margin": "-15px auto auto -30px",
    "width": "60px",
    "height": "30px",
    "background": "transparent",
    "opacity": "0.7",
    "color": "#0af",
    "fontSize": "20px",
    "borderRadius": "30px",
    "zIndex": "1999",
    "textAlign": "center",
    "lineHeight": "30px"
  },
  "am_indexed_list_qsindicator_hide": {
    "display": "none"
  },
  "am_radio": {
    "position": "relative",
    "display": "inline-block",
    "verticalAlign": "middle",
    "width": "15px",
    "height": "15px"
  },
  "am_radio_inner": {
    "position": "absolute",
    "right": "0",
    "width": "15px",
    "height": "15px",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "WebkitTransform": "rotate(0deg)",
    "MsTransform": "rotate(0deg)",
    "transform": "rotate(0deg)"
  },
  "am_radio_inner_after": {
    "position": "absolute",
    "display": "none",
    "top": "-2.5px",
    "right": "5px",
    "zIndex": "999",
    "width": "7px",
    "height": "14px",
    "borderStyle": "solid",
    "borderWidth": "0 1.5px 1.5px 0",
    "content": "' '",
    "WebkitTransform": "rotate(45deg)",
    "MsTransform": "rotate(45deg)",
    "transform": "rotate(45deg)"
  },
  "am_radio_input": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "opacity": "0",
    "width": "100%",
    "height": "100%",
    "zIndex": "2",
    "border": "0 none",
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none"
  },
  "am_radio_am_radio_checked__am_radio_inner": {
    "borderWidth": "0"
  },
  "am_radio_am_radio_checked__am_radio_inner_after": {
    "display": "block",
    "borderColor": "#108ee9"
  },
  "am_radio_am_radio_disabled_am_radio_checked__am_radio_inner_after": {
    "display": "block",
    "borderColor": "#bbb"
  },
  "am_list__am_list_item_am_radio_item__am_list_line__am_list_extra": {
    "WebkitBoxFlex": "0",
    "WebkitFlex": "0",
    "MsFlex": "0",
    "flex": "0"
  },
  "am_list__am_list_item_am_radio_item__am_list_line__am_list_extra__am_radio": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "0",
    "width": "100%",
    "height": "44px",
    "overflow": "visible"
  },
  "am_list__am_list_item_am_radio_item__am_list_line__am_list_extra__am_radio_inner": {
    "right": "15px",
    "top": "15px"
  },
  "am_list__am_list_item_am_radio_item_am_radio_item_disabled__am_list_content": {
    "color": "#bbb"
  },
  "am_menu": {
    "backgroundColor": "#f5f5f9"
  },
  "am_menu__am_menu_select_container": {
    "WebkitBoxFlex": "2",
    "WebkitFlexGrow": "2",
    "MsFlexPositive": "2",
    "flexGrow": "2"
  },
  "am_menu__am_menu_select_container__am_menu_select_container_submenu": {
    "WebkitAlignSelf": "stretch",
    "MsFlexItemAlign": "stretch",
    "alignSelf": "stretch"
  },
  "am_menu__am_multi_select_btns": {
    "height": "47px",
    "width": "100%"
  },
  "am_menu__am_multi_select_btns__am_multi_select_btns_btn": {
    "width": "50%",
    "height": "100%",
    "border": "1PX solid #ddd",
    "borderRadius": "0"
  },
  "am_menu__am_flexbox__am_flexbox_item": {
    "marginLeft": "0",
    "WebkitOverflowScrolling": "touch",
    "overflowY": "scroll"
  },
  "am_menu__am_flexbox__am_flexbox_item__am_list": {
    "padding": "0"
  },
  "am_menu__am_flexbox__am_flexbox_item__am_list__am_list_item__am_list_line__am_list_content": {
    "fontSize": "16px"
  },
  "am_menu__am_flexbox__am_flexbox_item__am_list__am_list_item__am_list_line__am_list_extra__am_checkbox_wrapper__am_checkbox": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "0",
    "width": "100%",
    "height": "100%",
    "overflow": "visible"
  },
  "am_menu__am_flexbox__am_flexbox_item__am_list__am_list_item__am_list_line__am_list_extra__am_checkbox_wrapper__am_checkbox__am_checkbox_inner": {
    "top": "12px",
    "right": "15px"
  },
  "am_menu__am_flexbox__am_flexbox_item_first_child": {
    "backgroundColor": "#f7f7f7"
  },
  "am_menu__am_flexbox__am_flexbox_item_first_child__am_list__am_list_body": {
    "backgroundColor": "#f7f7f7",
    "borderBottom": "0"
  },
  "am_menu__am_flexbox__am_flexbox_item_first_child__am_list__am_list_body_after": {
    "display": "none !important"
  },
  "am_menu__am_flexbox__am_flexbox_item_first_child__am_list__am_list_item": {
    "backgroundColor": "#f7f7f7"
  },
  "am_menu__am_flexbox__am_flexbox_item_first_child__am_list__am_list_item__am_list_line": {
    "borderBottom": "0"
  },
  "am_menu__am_flexbox__am_flexbox_item_first_child__am_list__am_list_item__am_list_line_after": {
    "display": "none !important"
  },
  "am_menu__am_flexbox__am_flexbox_item_first_child__am_list__am_list_item__am_list_line__am_list_content": {
    "color": "#000"
  },
  "am_menu__am_flexbox__am_flexbox_item_first_child__am_list__am_list_item_last_child": {
    "borderBottom": "0"
  },
  "am_menu__am_flexbox__am_flexbox_item_first_child__am_list__am_list_item_last_child_after": {
    "display": "none !important"
  },
  "am_menu__am_flexbox__am_flexbox_item_first_child__am_list__am_list_item_am_menu_selected": {
    "backgroundColor": "#fff"
  },
  "am_menu__am_flexbox__am_flexbox_item_last_child": {
    "backgroundColor": "#fff"
  },
  "am_menu__am_flexbox__am_flexbox_item_last_child__am_list__am_list_item": {
    "backgroundColor": "#fff",
    "borderBottom": "0"
  },
  "am_menu__am_flexbox__am_flexbox_item_last_child__am_list__am_list_item_after": {
    "display": "none !important"
  },
  "am_menu__am_flexbox__am_flexbox_item_last_child__am_list__am_list_item__am_list_line__am_list_extra": {
    "WebkitBoxFlex": "0",
    "WebkitFlex": "0",
    "MsFlex": "0",
    "flex": "0"
  },
  "am_menu__am_flexbox__am_flexbox_item_last_child__am_list__am_list_item_am_sub_menu_item_selected__am_list_line__am_list_content": {
    "color": "#108ee9"
  },
  "am_menu__am_flexbox__am_flexbox_item_last_child__am_list__am_list_item_am_sub_menu_item_disabled__am_list_line__am_list_content": {
    "color": "#bbb"
  },
  "am_menu__am_flexbox__am_flexbox_item_only_child__am_list__am_list_item__am_list_line": {
    "borderBottom": "1PX solid #ddd"
  },
  "am_menu__am_flexbox__am_flexbox_item_only_child__am_list__am_list_item_last_child": {
    "borderBottom": "1PX solid #ddd"
  },
  "am_menu__am_flexbox__am_flexbox_item_only_child__am_list__am_list_item_last_child__am_list_line": {
    "borderBottom": "0"
  },
  "am_menu__am_flexbox__am_flexbox_item_only_child__am_list__am_list_item_last_child__am_list_line_after": {
    "display": "none !important"
  },
  "am_modal": {
    "position": "relative"
  },
  "am_modal_not__am_modal_transparent__not__am_modal_popup": {
    "width": "100%",
    "height": "100%"
  },
  "am_modal_mask": {
    "position": "fixed",
    "top": "0",
    "right": "0",
    "left": "0",
    "bottom": "0",
    "height": "100%",
    "zIndex": "999",
    "backgroundColor": "rgba(0, 0, 0, 0.4)"
  },
  "am_modal_mask_hidden": {
    "display": "none"
  },
  "am_modal_wrap": {
    "position": "fixed",
    "overflow": "auto",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0",
    "height": "100%",
    "zIndex": "999",
    "WebkitOverflowScrolling": "touch",
    "outline": "0",
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitTransform": "translateZ(1px)",
    "transform": "translateZ(1px)"
  },
  "am_modal_wrap_popup": {
    "display": "block"
  },
  "am_modal_transparent": {
    "width": "270px"
  },
  "am_modal_transparent__am_modal_content": {
    "borderRadius": "7px",
    "paddingTop": "15px"
  },
  "am_modal_transparent__am_modal_content__am_modal_body": {
    "padding": "0 15px 15px"
  },
  "am_modal_popup": {
    "position": "fixed",
    "left": "0",
    "width": "100%"
  },
  "am_modal_popup_slide_down": {
    "top": "0"
  },
  "am_modal_popup_slide_up": {
    "bottom": "0"
  },
  "am_modal_popup__am_modal_content": {
    "paddingBottom": "env(safe-area-inset-bottom)"
  },
  "am_modal_title": {
    "margin": "0",
    "fontSize": "18px",
    "lineHeight": "1",
    "color": "#000",
    "textAlign": "center"
  },
  "am_modal_header": {
    "padding": "6px 15px 15px"
  },
  "am_modal_content": {
    "position": "relative",
    "backgroundColor": "#fff",
    "border": "0",
    "backgroundClip": "padding-box",
    "textAlign": "center",
    "height": "100%",
    "overflow": "hidden"
  },
  "am_modal_close": {
    "border": "0",
    "padding": "0",
    "backgroundColor": "transparent",
    "outline": "none",
    "position": "absolute",
    "right": "15px",
    "zIndex": "999",
    "height": "21px",
    "width": "21px"
  },
  "am_modal_close_x": {
    "display": "inline-block",
    "width": "15px",
    "height": "15px",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'30'%20height%3D'30'%20viewBox%3D'0%200%2030%2030'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%20%3Cdefs%3E%3C%2Fdefs%3E%20%3Cg%20id%3D'ALL-ICON'%20stroke%3D'none'%20stroke-width%3D'1'%20fill%3D'none'%20fill-rule%3D'evenodd'%3E%20%3Cg%20id%3D'Rectangle-283-%2B-Rectangle-283'%20fill%3D'%23888888'%3E%20%3Crect%20id%3D'Rectangle-283'%20transform%3D'translate(14.849242%2C%2014.849242)%20rotate(-315.000000)%20translate(-14.849242%2C%20-14.849242)%20'%20x%3D'-5.1507576'%20y%3D'13.8492424'%20width%3D'40'%20height%3D'2'%3E%3C%2Frect%3E%20%3Crect%20id%3D'Rectangle-283'%20transform%3D'translate(14.849242%2C%2014.849242)%20scale(-1%2C%201)%20rotate(-315.000000)%20translate(-14.849242%2C%20-14.849242)%20'%20x%3D'-5.1507576'%20y%3D'13.8492424'%20width%3D'40'%20height%3D'2'%3E%3C%2Frect%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%20%3C%2Fsvg%3E\")"
  },
  "am_modal_body": {
    "fontSize": "15px",
    "color": "#888",
    "height": "100%",
    "lineHeight": "1.5",
    "overflow": "auto"
  },
  "am_modal_button_group_h": {
    "position": "relative",
    "borderTop": "1PX solid #ddd",
    "display": "flex"
  },
  "am_modal_button_group_h__am_modal_button": {
    "WebkitTouchCallout": "none",
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "textAlign": "center",
    "textDecoration": "none",
    "outline": "none",
    "color": "#108ee9",
    "fontSize": "18px",
    "height": "50px",
    "lineHeight": "50px",
    "display": "block",
    "width": "auto",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "am_modal_button_group_h__am_modal_button_first_child": {
    "color": "#000"
  },
  "am_modal_button_group_h__am_modal_button_last_child": {
    "position": "relative",
    "borderLeft": "1PX solid #ddd"
  },
  "am_modal_button_group_v__am_modal_button": {
    "WebkitTouchCallout": "none",
    "position": "relative",
    "borderTop": "1PX solid #ddd",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "textAlign": "center",
    "textDecoration": "none",
    "outline": "none",
    "color": "#108ee9",
    "fontSize": "18px",
    "height": "50px",
    "lineHeight": "50px",
    "display": "block",
    "width": "auto",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "am_modal_button_active": {
    "backgroundColor": "#ddd"
  },
  "am_modal_input_container": {
    "marginTop": "9px",
    "border": "1PX solid #ddd",
    "borderRadius": "3px"
  },
  "am_modal_input": {
    "height": "36px",
    "lineHeight": "1"
  },
  "am_modal_input_nth_child_2": {
    "position": "relative",
    "borderTop": "1PX solid #ddd"
  },
  "am_modal_input_input": {
    "position": "relative",
    "border": "0",
    "width": "98%",
    "height": "34px",
    "top": "1PX",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "margin": "0"
  },
  "am_modal_input_input___webkit_input_placeholder": {
    "fontSize": "14px",
    "color": "#ccc",
    "paddingLeft": "8px"
  },
  "am_modal_input_input___moz_placeholder": {
    "fontSize": "14px",
    "color": "#ccc",
    "paddingLeft": "8px"
  },
  "am_modal_input_input___ms_input_placeholder": {
    "fontSize": "14px",
    "color": "#ccc",
    "paddingLeft": "8px"
  },
  "am_modal_input_input__placeholder": {
    "fontSize": "14px",
    "color": "#ccc",
    "paddingLeft": "8px"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content": {
    "borderRadius": "0"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_header": {
    "padding": "9px 24px 12px"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_header__am_modal_title": {
    "textAlign": "left",
    "fontSize": "21px",
    "color": "#000"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_body": {
    "color": "#000",
    "textAlign": "left",
    "padding": "0 24px 15px"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_body__am_modal_input_container": {
    "border": "0",
    "borderBottom": "1PX solid #ddd"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_body__am_modal_input_container_before": {
    "display": "none !important"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_body__am_modal_input_container__am_modal_input_first_child": {
    "borderTop": "0"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_body__am_modal_input_container__am_modal_input_first_child_before": {
    "display": "none !important"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_footer": {
    "paddingBottom": "12px"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_footer__am_modal_button_group_h": {
    "overflow": "hidden",
    "borderTop": "0",
    "WebkitBoxPack": "end",
    "WebkitJustifyContent": "flex-end",
    "MsFlexPack": "end",
    "justifyContent": "flex-end",
    "padding": "0 12px"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_footer__am_modal_button_group_h_before": {
    "display": "none !important"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_footer__am_modal_button_group_h__am_modal_button": {
    "WebkitBoxFlex": "initial",
    "WebkitFlex": "initial",
    "MsFlex": "initial",
    "flex": "initial",
    "marginLeft": "3px",
    "padding": "0 15px",
    "height": "48px",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_footer__am_modal_button_group_h__am_modal_button_first_child": {
    "color": "#777"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_footer__am_modal_button_group_h__am_modal_button_last_child": {
    "borderLeft": "0"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_footer__am_modal_button_group_h__am_modal_button_last_child_before": {
    "display": "none !important"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_footer__am_modal_button_group_v_am_modal_button_group_normal": {
    "display": "flex",
    "WebkitBoxPack": "end",
    "WebkitJustifyContent": "flex-end",
    "MsFlexPack": "end",
    "justifyContent": "flex-end",
    "overflow": "hidden",
    "padding": "0 12px"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_footer__am_modal_button_group_v_am_modal_button_group_normal__am_modal_button": {
    "borderTop": "0",
    "padding": "0 15px",
    "marginLeft": "3px",
    "height": "48px",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_footer__am_modal_button_group_v_am_modal_button_group_normal__am_modal_button_before": {
    "display": "none !important"
  },
  "am_modal_am_modal_transparent_am_modal_android__am_modal_content__am_modal_footer__am_modal_button_group_operation__am_modal_button": {
    "textAlign": "start",
    "paddingLeft": "15px"
  },
  "am_modal_am_modal_operation__am_modal_content": {
    "borderRadius": "7px",
    "height": "auto",
    "paddingTop": "0"
  },
  "am_modal_am_modal_operation__am_modal_content__am_modal_body": {
    "padding": "0!important"
  },
  "am_modal_am_modal_operation__am_modal_content__am_modal_button": {
    "color": "#000",
    "textAlign": "left",
    "paddingLeft": "15px"
  },
  "am_modal_alert_content": {
    "zoom": "1",
    "overflow": "hidden"
  },
  "am_modal_propmt_content": {
    "zoom": "1",
    "overflow": "hidden"
  },
  "am_navbar": {
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "height": "45px",
    "backgroundColor": "#108ee9",
    "color": "#fff"
  },
  "am_navbar_left": {
    "paddingLeft": "15px",
    "fontSize": "16px"
  },
  "am_navbar_title": {
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "fontSize": "18px",
    "whiteSpace": "nowrap"
  },
  "am_navbar_right": {
    "WebkitBoxPack": "end",
    "WebkitJustifyContent": "flex-end",
    "MsFlexPack": "end",
    "justifyContent": "flex-end",
    "fontSize": "16px",
    "marginRight": "15px"
  },
  "am_navbar_left_icon": {
    "marginRight": "5px",
    "display": "inherit"
  },
  "am_navbar_light": {
    "backgroundColor": "#fff",
    "color": "#108ee9"
  },
  "am_navbar_light__am_navbar_title": {
    "color": "#000"
  },
  "am_notice_bar": {
    "backgroundColor": "#fefcec",
    "height": "36px",
    "overflow": "hidden",
    "fontSize": "14px",
    "lineHeight": "36px",
    "color": "#f76a24",
    "display": "flex"
  },
  "am_notice_bar_content": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "width": "auto",
    "margin": "auto 15px",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap"
  },
  "am_notice_bar_icon": {
    "marginLeft": "15px",
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_notice_bar_icon__am_notice_bar_trips": {
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2238%22%20height%3D%2233%22%20viewBox%3D%220%200%2038%2033%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Etrips%3C%2Ftitle%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M17.838%2028.8c-.564-.468-1.192-.983-1.836-1.496-4.244-3.385-5.294-3.67-6.006-3.67-.014%200-.027.005-.04.005-.015%200-.028-.005-.042-.005H3.562c-.734%200-.903-.203-.903-.928V10.085c0-.49.058-.8.66-.8h5.782c.693%200%201.758-.28%206.4-3.628.828-.597%201.637-1.197%202.336-1.723V28.8zM19.682.19c-.463-.22-1.014-.158-1.417.157-.02.016-1.983%201.552-4.152%203.125C10.34%206.21%209.243%206.664%209.02%206.737H3.676c-.027%200-.053.003-.08.004H1.183c-.608%200-1.1.486-1.1%201.085V25.14c0%20.598.492%201.084%201.1%201.084h8.71c.22.08%201.257.55%204.605%203.24%201.947%201.562%203.694%203.088%203.712%203.103.25.22.568.333.89.333.186%200%20.373-.038.55-.116.48-.213.79-.684.79-1.204V1.38c0-.506-.294-.968-.758-1.19z%22%20mask%3D%22url(%23mask-2)%22%2F%3E%3Cpath%20d%3D%22M31.42%2016.475c0-3.363-1.854-6.297-4.606-7.876-.125-.066-.42-.192-.625-.192-.612%200-1.108.488-1.108%201.09%200%20.404.22.764.55.952%202.128%201.19%203.565%203.442%203.565%206.025%200%202.627-1.486%204.913-3.677%206.087-.318.19-.53.54-.53.934%200%20.602.496%201.09%201.107%201.09.26.002.568-.15.568-.15%202.835-1.556%204.754-4.538%204.754-7.96%22%20mask%3D%22url(%23mask-4)%22%2F%3E%3Cg%3E%3Cpath%20d%3D%22M30.14%203.057c-.205-.122-.41-.22-.658-.22-.608%200-1.1.485-1.1%201.084%200%20.433.26.78.627.977%204.043%202.323%206.762%206.636%206.762%2011.578%200%204.938-2.716%209.248-6.755%2011.572-.354.19-.66.55-.66.993%200%20.6.494%201.084%201.102%201.084.243%200%20.438-.092.65-.213%204.692-2.695%207.848-7.7%207.848-13.435%200-5.723-3.142-10.718-7.817-13.418%22%20mask%3D%22url(%23mask-6)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\")"
  },
  "am_notice_bar_icon___div": {
    "marginLeft": "5px"
  },
  "am_notice_bar_operation": {
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "paddingRight": "8px"
  },
  "am_pagination_wrap": {
    "fontSize": "18px",
    "color": "#000",
    "background": "none",
    "textAlign": "center"
  },
  "am_pagination_wrap__active": {
    "color": "#108ee9"
  },
  "am_pagination_wrap_btn": {
    "textAlign": "center"
  },
  "am_pagination_wrap_btn_prev": {
    "textAlign": "left"
  },
  "am_pagination_wrap_btn_next": {
    "textAlign": "right"
  },
  "am_pagination_wrap_dot": {
    "display": "inline-block",
    "zoom": "1"
  },
  "am_pagination_wrap_dot___span": {
    "display": "block",
    "width": "8px",
    "height": "8px",
    "marginRight": "5px",
    "borderRadius": "50%",
    "background": "#ccc"
  },
  "am_pagination_wrap_dot_active___span": {
    "background": "#888"
  },
  "am_popover": {
    "position": "absolute",
    "zIndex": "1999"
  },
  "am_popover_hidden": {
    "display": "none"
  },
  "am_popover_mask": {
    "position": "fixed",
    "top": "0",
    "right": "0",
    "left": "0",
    "bottom": "0",
    "backgroundColor": "rgba(0, 0, 0, 0.4)",
    "height": "100%",
    "zIndex": "999"
  },
  "am_popover_mask_hidden": {
    "display": "none"
  },
  "am_popover_arrow": {
    "position": "absolute",
    "width": "7px",
    "height": "7px",
    "borderRadius": "1PX",
    "backgroundColor": "#fff",
    "WebkitTransform": "rotate(45deg)",
    "MsTransform": "rotate(45deg)",
    "transform": "rotate(45deg)",
    "zIndex": "0",
    "WebkitBoxShadow": "0 0 2px rgba(0, 0, 0, 0.21)",
    "boxShadow": "0 0 2px rgba(0, 0, 0, 0.21)"
  },
  "am_popover_placement_top__am_popover_arrow": {
    "left": "50%"
  },
  "am_popover_placement_topLeft__am_popover_arrow": {
    "left": "8px"
  },
  "am_popover_placement_topRight__am_popover_arrow": {
    "right": "8px"
  },
  "am_popover_placement_right__am_popover_arrow": {
    "top": "50%"
  },
  "am_popover_placement_rightTop__am_popover_arrow": {
    "top": "8px"
  },
  "am_popover_placement_rightBottom__am_popover_arrow": {
    "bottom": "8px"
  },
  "am_popover_placement_left__am_popover_arrow": {
    "top": "50%"
  },
  "am_popover_placement_leftTop__am_popover_arrow": {
    "top": "8px"
  },
  "am_popover_placement_leftBottom__am_popover_arrow": {
    "bottom": "8px"
  },
  "am_popover_placement_bottom__am_popover_arrow": {
    "left": "50%"
  },
  "am_popover_placement_bottomLeft__am_popover_arrow": {
    "left": "8px"
  },
  "am_popover_placement_bottomRight__am_popover_arrow": {
    "right": "8px"
  },
  "am_popover_inner": {
    "fontSize": "15px",
    "color": "#000",
    "backgroundColor": "#fff",
    "borderRadius": "3px",
    "WebkitBoxShadow": "0 0 2px rgba(0, 0, 0, 0.21)",
    "boxShadow": "0 0 2px rgba(0, 0, 0, 0.21)",
    "overflow": "hidden"
  },
  "am_popover_inner_wrapper": {
    "position": "relative",
    "backgroundColor": "#fff"
  },
  "am_popover__am_popover_item": {
    "padding": "0 8px"
  },
  "am_popover__am_popover_item_container": {
    "position": "relative",
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "height": "39px",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "padding": "0 8px"
  },
  "am_popover__am_popover_item_not__first_child___am_popover_item_container": {
    "borderTop": "1PX solid #ddd"
  },
  "am_popover__am_popover_item_am_popover_item_active__am_popover_item_container": {
    "borderTop": "0"
  },
  "am_popover__am_popover_item_am_popover_item_active__am_popover_item_container_before": {
    "display": "none !important"
  },
  "am_popover__am_popover_item_am_popover_item_active____am_popover_item__am_popover_item_container": {
    "borderTop": "0"
  },
  "am_popover__am_popover_item_am_popover_item_active____am_popover_item__am_popover_item_container_before": {
    "display": "none !important"
  },
  "am_popover__am_popover_item_am_popover_item_active": {
    "backgroundColor": "#ddd"
  },
  "am_popover__am_popover_item_am_popover_item_active_am_popover_item_fix_active_arrow": {
    "position": "relative"
  },
  "am_popover__am_popover_item_am_popover_item_disabled": {
    "color": "#bbb"
  },
  "am_popover__am_popover_item_am_popover_item_disabled_am_popover_item_active": {
    "backgroundColor": "transparent"
  },
  "am_popover__am_popover_item_icon": {
    "marginRight": "8px",
    "width": "18px",
    "height": "18px"
  },
  "am_progress_outer": {
    "backgroundColor": "#ddd",
    "display": "block"
  },
  "am_progress_fixed_outer": {
    "position": "fixed",
    "width": "100%",
    "top": "0",
    "left": "0",
    "zIndex": "2000"
  },
  "am_progress_hide_outer": {
    "backgroundColor": "transparent"
  },
  "am_progress_bar": {
    "border": "2px solid #108ee9",
    "WebkitTransition": "all .3s linear 0s",
    "transition": "all .3s linear 0s"
  },
  "am_pull_to_refresh_content": {
    "WebkitTransformOrigin": "left top 0",
    "MsTransformOrigin": "left top 0",
    "transformOrigin": "left top 0"
  },
  "am_pull_to_refresh_content_wrapper": {
    "overflow": "hidden"
  },
  "am_pull_to_refresh_transition": {
    "WebkitTransition": "-webkit-transform 0.3s",
    "transition": "transform 0.3s, -webkit-transform 0.3s"
  },
  "am_pull_to_refresh_indicator": {
    "color": "grey",
    "textAlign": "center",
    "height": "25px"
  },
  "am_pull_to_refresh_down__am_pull_to_refresh_indicator": {
    "marginTop": "-25px"
  },
  "am_pull_to_refresh_up__am_pull_to_refresh_indicator": {
    "marginBottom": "-25px"
  },
  "am_slider": {
    "position": "relative"
  },
  "am_slider_rail": {
    "position": "absolute",
    "width": "100%",
    "backgroundColor": "#ddd",
    "height": "2px",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box"
  },
  "am_slider_track": {
    "position": "absolute",
    "left": "0",
    "height": "2px",
    "borderRadius": "2px",
    "backgroundColor": "#108ee9"
  },
  "am_slider_handle": {
    "position": "absolute",
    "marginLeft": "-12px",
    "marginTop": "-10px",
    "width": "22px",
    "height": "22px",
    "cursor": "pointer",
    "borderRadius": "50%",
    "border": "2px solid #108ee9",
    "backgroundColor": "#fff",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box"
  },
  "am_slider_handle_focus": {
    "backgroundColor": "#40a5ed"
  },
  "am_slider_mark": {
    "position": "absolute",
    "top": "20px",
    "left": "0",
    "width": "100%",
    "fontSize": "12px"
  },
  "am_slider_mark_text": {
    "position": "absolute",
    "display": "inline-block",
    "verticalAlign": "middle",
    "textAlign": "center",
    "cursor": "pointer",
    "color": "#000"
  },
  "am_slider_mark_text_active": {
    "opacity": "0.3"
  },
  "am_slider_step": {
    "position": "absolute",
    "width": "100%",
    "height": "4px",
    "background": "transparent"
  },
  "am_slider_dot": {
    "position": "absolute",
    "bottom": "-5px",
    "marginLeft": "-4px",
    "width": "12px",
    "height": "12px",
    "border": "2px solid #ddd",
    "backgroundColor": "#fff",
    "cursor": "pointer",
    "borderRadius": "50%",
    "verticalAlign": "middle"
  },
  "am_slider_dot_first_child": {
    "marginLeft": "-4px"
  },
  "am_slider_dot_last_child": {
    "marginLeft": "-4px"
  },
  "am_slider_dot_active": {
    "borderColor": "#108ee9"
  },
  "am_slider_disabled": {
    "opacity": "0.3"
  },
  "am_slider_disabled__am_slider_track": {
    "height": "2px"
  },
  "am_slider_disabled__am_slider_handle": {
    "cursor": "not-allowed",
    "WebkitBoxShadow": "none",
    "boxShadow": "none"
  },
  "am_slider_disabled__am_slider_mark_text": {
    "cursor": "not-allowed",
    "WebkitBoxShadow": "none",
    "boxShadow": "none"
  },
  "am_slider_disabled__am_slider_dot": {
    "cursor": "not-allowed",
    "WebkitBoxShadow": "none",
    "boxShadow": "none"
  },
  "am_result": {
    "position": "relative",
    "textAlign": "center",
    "width": "100%",
    "paddingTop": "30px",
    "paddingBottom": "21px",
    "backgroundColor": "#fff",
    "borderBottom": "1PX solid #ddd"
  },
  "am_result__am_result_pic": {
    "width": "60px",
    "height": "60px",
    "margin": "0 auto",
    "lineHeight": "60px",
    "backgroundSize": "60px 60px"
  },
  "am_result__am_result_title": {
    "marginTop": "15px",
    "lineHeight": "1"
  },
  "am_result__am_result_message": {
    "marginTop": "9px",
    "lineHeight": "1.5",
    "fontSize": "16px",
    "color": "#888"
  },
  "am_result__am_result_button": {
    "padding": "0 15px",
    "marginTop": "15px"
  },
  "am_search": {
    "position": "relative",
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "height": "44px",
    "padding": "0 8px",
    "overflow": "hidden",
    "backgroundColor": "#efeff4"
  },
  "am_search_input": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "position": "relative",
    "width": "100%",
    "height": "28px",
    "overflow": "hidden",
    "backgroundColor": "#fff",
    "backgroundClip": "padding-box",
    "borderRadius": "3px"
  },
  "am_search_input__am_search_synthetic_ph": {
    "WebkitBoxSizing": "content-box",
    "boxSizing": "content-box",
    "zIndex": "1",
    "height": "28px",
    "lineHeight": "28px",
    "width": "100%",
    "WebkitTransition": "width .3s",
    "transition": "width .3s",
    "display": "block",
    "textAlign": "center"
  },
  "am_search_input_input_type__search": {
    "zIndex": "2",
    "opacity": "0",
    "width": "100%",
    "textAlign": "left",
    "display": "block",
    "color": "#000",
    "height": "28px",
    "fontSize": "15px",
    "backgroundColor": "transparent",
    "border": "0"
  },
  "am_search_input__am_search_synthetic_ph_icon": {
    "display": "inline-block",
    "marginRight": "5px",
    "width": "15px",
    "height": "15px",
    "overflow": "hidden",
    "verticalAlign": "-2.5px",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "15px auto",
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'38'%20height%3D'36'%20viewBox%3D'0%200%2038%2036'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M29.05%2025.23a15.81%2015.81%200%200%200%203.004-9.294c0-8.8-7.17-15.934-16.017-15.934C7.192.002.02%207.136.02%2015.936c0%208.802%207.172%2015.937%2016.017%2015.937%204.148%200%207.928-1.569%2010.772-4.143l8.873%208.232%202.296-2.45-8.927-8.282zM16.2%2028.933c-7.19%200-13.04-5.788-13.04-12.903%200-7.113%205.85-12.904%2013.04-12.904%207.19%200%2012.9%205.79%2012.9%2012.904%200%207.115-5.71%2012.903-12.9%2012.903z'%20fill%3D'%23bbb'%20fill-rule%3D'evenodd'%2F%3E%3C%2Fsvg%3E\")"
  },
  "am_search_input__am_search_synthetic_ph_placeholder": {
    "color": "#bbb",
    "fontSize": "15px"
  },
  "am_search_input_input_type__search_____webkit_input_placeholder": {
    "background": "none",
    "textAlign": "left",
    "color": "transparent"
  },
  "am_search_input_input_type__search_____moz_placeholder": {
    "background": "none",
    "textAlign": "left",
    "color": "transparent"
  },
  "am_search_input_input_type__search_____ms_input_placeholder": {
    "background": "none",
    "textAlign": "left",
    "color": "transparent"
  },
  "am_search_input_input_type__search____placeholder": {
    "background": "none",
    "textAlign": "left",
    "color": "transparent"
  },
  "am_search_input_input_type__search_____webkit_search_cancel_button": {
    "WebkitAppearance": "none"
  },
  "am_search_input__am_search_clear": {
    "WebkitBoxSizing": "content-box",
    "boxSizing": "content-box",
    "position": "absolute",
    "display": "none",
    "zIndex": "3",
    "width": "15px",
    "height": "15px",
    "padding": "6.5px",
    "borderRadius": "50%",
    "top": "0",
    "right": "0",
    "backgroundColor": "transparent",
    "backgroundPosition": "center",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "15px 15px",
    "WebkitTransition": "all .3s",
    "transition": "all .3s",
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2028%2028'%3E%3Ccircle%20cx%3D'14'%20cy%3D'14'%20r%3D'14'%20fill%3D'%23ccc'%2F%3E%3Cline%20stroke%3D'%23ffffff'%20stroke-width%3D'2'%20stroke-miterlimit%3D'10'%20x1%3D'8'%20y1%3D'8'%20x2%3D'20'%20y2%3D'20'%2F%3E%3Cline%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-width%3D'2'%20stroke-miterlimit%3D'10'%20x1%3D'20'%20y1%3D'8'%20x2%3D'8'%20y2%3D'20'%2F%3E%3C%2Fsvg%3E\")"
  },
  "am_search_input__am_search_clear_active": {
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2028%2028'%3E%3Ccircle%20cx%3D'14'%20cy%3D'14'%20r%3D'14'%20fill%3D'%23108ee9'%2F%3E%3Cline%20stroke%3D'%23ffffff'%20stroke-width%3D'2'%20stroke-miterlimit%3D'10'%20x1%3D'8'%20y1%3D'8'%20x2%3D'20'%20y2%3D'20'%2F%3E%3Cline%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-width%3D'2'%20stroke-miterlimit%3D'10'%20x1%3D'20'%20y1%3D'8'%20x2%3D'8'%20y2%3D'20'%2F%3E%3C%2Fsvg%3E\")"
  },
  "am_search_input__am_search_clear_show": {
    "display": "block"
  },
  "am_search_cancel": {
    "WebkitBoxFlex": "0",
    "WebkitFlex": "none",
    "MsFlex": "none",
    "flex": "none",
    "opacity": "0",
    "paddingLeft": "8px",
    "height": "44px",
    "lineHeight": "44px",
    "fontSize": "16px",
    "color": "#108ee9",
    "textAlign": "right"
  },
  "am_search_cancel_anim": {
    "WebkitTransition": "margin-right 0.3s, opacity 0.3s",
    "transition": "margin-right 0.3s, opacity 0.3s",
    "WebkitTransitionDelay": ".1s",
    "transitionDelay": ".1s"
  },
  "am_search_cancel_show": {
    "opacity": "1"
  },
  "am_search_am_search_start__am_search_input_input_type__search": {
    "opacity": "1",
    "padding": "0 28px 0 35px"
  },
  "am_search_am_search_start__am_search_input_input_type__search_____webkit_input_placeholder": {
    "color": "transparent"
  },
  "am_search_am_search_start__am_search_input_input_type__search_____moz_placeholder": {
    "color": "transparent"
  },
  "am_search_am_search_start__am_search_input_input_type__search_____ms_input_placeholder": {
    "color": "transparent"
  },
  "am_search_am_search_start__am_search_input_input_type__search____placeholder": {
    "color": "transparent"
  },
  "am_search_am_search_start__am_search_input__am_search_synthetic_ph": {
    "paddingLeft": "15px",
    "width": "auto"
  },
  "am_segment": {
    "display": "flex",
    "borderRadius": "5px",
    "overflow": "hidden",
    "minHeight": "27px",
    "opacity": "1"
  },
  "am_segment_am_segment_disabled": {
    "opacity": "0.5"
  },
  "am_segment_item": {
    "display": "flex",
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "color": "#108ee9",
    "fontSize": "14px",
    "lineHeight": "1",
    "WebkitTransition": "background .2s",
    "transition": "background .2s",
    "position": "relative",
    "border": "1PX solid #108ee9",
    "width": "100%",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "borderLeftWidth": "0"
  },
  "am_segment_item_tintcolor": {
    "borderColor": "#108ee9"
  },
  "am_segment_item_first_child": {
    "borderLeftWidth": "1PX",
    "borderRadius": "5px 0 0 5px"
  },
  "am_segment_item_last_child": {
    "borderRadius": "0 5px 5px 0"
  },
  "am_segment_item_selected": {
    "background": "#108ee9",
    "color": "#fff"
  },
  "am_segment_item_active__am_segment_item_inner": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "height": "100%",
    "width": "100%",
    "opacity": "0.1",
    "WebkitTransition": "background .2s",
    "transition": "background .2s",
    "backgroundColor": "#108ee9"
  },
  "am_stepper": {
    "position": "relative",
    "margin": "0",
    "padding": "2px 0",
    "display": "inline-block",
    "WebkitBoxSizing": "content-box",
    "boxSizing": "content-box",
    "width": "63px",
    "height": "35px",
    "lineHeight": "35px",
    "fontSize": "14px",
    "verticalAlign": "middle",
    "overflow": "hidden"
  },
  "am_stepper_handler_wrap": {
    "position": "absolute",
    "width": "100%",
    "fontSize": "24px"
  },
  "am_stepper_handler": {
    "textAlign": "center",
    "border": "1PX solid #ddd",
    "borderRadius": "5px",
    "overflow": "hidden",
    "color": "#000",
    "position": "absolute",
    "display": "inline-block",
    "WebkitBoxSizing": "content-box",
    "boxSizing": "content-box"
  },
  "am_stepper_handler_up_inner": {
    "WebkitUserSelect": "none",
    "MozUserSelect": "none",
    "MsUserSelect": "none",
    "userSelect": "none",
    "right": "2px",
    "color": "#000"
  },
  "am_stepper_handler_down_inner": {
    "WebkitUserSelect": "none",
    "MozUserSelect": "none",
    "MsUserSelect": "none",
    "userSelect": "none",
    "right": "2px",
    "color": "#000"
  },
  "am_stepper_handler_active": {
    "zIndex": "2",
    "backgroundColor": "#ddd"
  },
  "am_stepper_input_wrap": {
    "display": "none",
    "width": "100%",
    "height": "30px",
    "lineHeight": "30px",
    "textAlign": "center",
    "overflow": "hidden"
  },
  "am_stepper_input": {
    "display": "none",
    "width": "60px",
    "fontSize": "16px",
    "color": "#000",
    "textAlign": "center",
    "border": "0",
    "padding": "0",
    "background": "none",
    "verticalAlign": "middle"
  },
  "am_stepper_input_disabled": {
    "opacity": "1",
    "color": "#000"
  },
  "am_stepper_showNumber": {
    "width": "138px"
  },
  "am_stepper_showNumber__am_stepper_input_wrap": {
    "display": "inline-block"
  },
  "am_stepper_showNumber__am_stepper_input": {
    "display": "inline-block"
  },
  "am_stepper_showNumber__am_stepper_handler_down_disabled": {
    "right": "-1PX"
  },
  "am_stepper_handler_up": {
    "cursor": "pointer",
    "right": "0"
  },
  "am_stepper_handler_up_inner_before": {
    "textAlign": "center",
    "content": "\"+\""
  },
  "am_stepper_handler_down": {
    "cursor": "pointer",
    "left": "0"
  },
  "am_stepper_handler_down_inner_before": {
    "textAlign": "center",
    "content": "\"-\""
  },
  "am_stepper_handler_down_disabled": {
    "opacity": "0.3"
  },
  "am_stepper_handler_up_disabled": {
    "opacity": "0.3"
  },
  "am_stepper_handler_up_disabled__am_stepper_handler_active": {
    "background": "none"
  },
  "am_stepper_disabled__am_stepper_handler_down": {
    "opacity": "0.3",
    "background": "none"
  },
  "am_stepper_disabled__am_stepper_handler_up": {
    "opacity": "0.3",
    "background": "none"
  },
  "am_stepper_disabled__am_stepper_handler": {
    "opacity": "0.3"
  },
  "am_stepper_disabled__am_stepper_input_wrap": {
    "opacity": "0.3"
  },
  "am_steps": {
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box"
  },
  "am_steps_item": {
    "position": "relative",
    "display": "inline-block",
    "verticalAlign": "top",
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "overflow": "hidden"
  },
  "am_steps_item_last_child": {
    "WebkitBoxFlex": "0",
    "WebkitFlex": "none",
    "MsFlex": "none",
    "flex": "none"
  },
  "am_steps_item_last_child__am_steps_item_tail": {
    "display": "none"
  },
  "am_steps_item_last_child__am_steps_item_title_after": {
    "display": "none"
  },
  "am_steps_item_icon": {
    "border": "1px solid #bbb",
    "width": "22px",
    "height": "22px",
    "lineHeight": "22px",
    "borderRadius": "22px",
    "textAlign": "center",
    "fontSize": "14px",
    "marginRight": "8px",
    "WebkitTransition": "background-color 0.3s, border-color 0.3s",
    "transition": "background-color 0.3s, border-color 0.3s"
  },
  "am_steps_item_content": {
    "marginTop": "3px"
  },
  "am_steps_item_icon____am_steps_icon": {
    "lineHeight": "1",
    "top": "-1px",
    "color": "#108ee9",
    "position": "relative"
  },
  "am_steps_item_icon____am_steps_icon__am_icon": {
    "fontSize": "12px",
    "position": "relative",
    "float": "left"
  },
  "am_steps_item_tail": {
    "position": "absolute",
    "left": "0",
    "width": "100%",
    "top": "12px",
    "padding": "0 10px"
  },
  "am_steps_item_tail_after": {
    "content": "''",
    "display": "inline-block",
    "background": "#ddd",
    "height": "1px",
    "borderRadius": "1px",
    "width": "100%",
    "WebkitTransition": "background .3s",
    "transition": "background .3s",
    "position": "relative",
    "left": "-2px"
  },
  "am_steps_item_title": {
    "fontSize": "16px",
    "marginBottom": "4px",
    "color": "#000",
    "fontWeight": "bold",
    "display": "inline-block",
    "paddingRight": "10px",
    "position": "relative"
  },
  "am_steps_item_description": {
    "fontSize": "15px",
    "color": "#bbb"
  },
  "am_steps_item_wait__am_steps_item_icon": {
    "borderColor": "#ccc",
    "backgroundColor": "#fff"
  },
  "am_steps_item_wait__am_steps_item_icon____am_steps_icon": {
    "color": "#ccc"
  },
  "am_steps_item_wait__am_steps_item_icon____am_steps_icon__am_steps_icon_dot": {
    "background": "#ccc"
  },
  "am_steps_item_wait__am_steps_item_title": {
    "color": "#000"
  },
  "am_steps_item_wait__am_steps_item_title_after": {
    "backgroundColor": "#ddd"
  },
  "am_steps_item_wait__am_steps_item_description": {
    "color": "#000"
  },
  "am_steps_item_wait__am_steps_item_tail_after": {
    "backgroundColor": "#ddd"
  },
  "am_steps_item_process__am_steps_item_icon": {
    "background": "#108ee9"
  },
  "am_steps_item_process__am_steps_item_icon____am_steps_icon": {
    "color": "#fff"
  },
  "am_steps_item_process__am_steps_item_icon____am_steps_icon__am_steps_icon_dot": {
    "background": "#108ee9"
  },
  "am_steps_item_process__am_steps_item_title": {
    "color": "#000"
  },
  "am_steps_item_process__am_steps_item_title_after": {
    "backgroundColor": "#ddd"
  },
  "am_steps_item_process__am_steps_item_description": {
    "color": "#000"
  },
  "am_steps_item_process__am_steps_item_tail_after": {
    "backgroundColor": "#ddd"
  },
  "am_steps_item_finish__am_steps_item_icon": {
    "borderColor": "#108ee9",
    "backgroundColor": "#fff"
  },
  "am_steps_item_finish__am_steps_item_icon____am_steps_icon": {
    "color": "#108ee9"
  },
  "am_steps_item_finish__am_steps_item_icon____am_steps_icon__am_steps_icon_dot": {
    "background": "#108ee9"
  },
  "am_steps_item_finish__am_steps_item_title": {
    "color": "#000"
  },
  "am_steps_item_finish__am_steps_item_title_after": {
    "backgroundColor": "#108ee9"
  },
  "am_steps_item_finish__am_steps_item_description": {
    "color": "#000"
  },
  "am_steps_item_finish__am_steps_item_tail_after": {
    "backgroundColor": "#108ee9"
  },
  "am_steps_item_error__am_steps_item_icon": {
    "borderColor": "#f4333c",
    "backgroundColor": "#fff"
  },
  "am_steps_item_error__am_steps_item_icon____am_steps_icon": {
    "color": "#f4333c"
  },
  "am_steps_item_error__am_steps_item_icon____am_steps_icon__am_steps_icon_dot": {
    "background": "#f4333c"
  },
  "am_steps_item_error__am_steps_item_title": {
    "color": "#f4333c"
  },
  "am_steps_item_error__am_steps_item_title_after": {
    "backgroundColor": "#ddd"
  },
  "am_steps_item_error__am_steps_item_description": {
    "color": "#f4333c"
  },
  "am_steps_item_error__am_steps_item_tail_after": {
    "backgroundColor": "#ddd"
  },
  "am_steps_item_am_steps_next_error__am_steps_item_title_after": {
    "background": "#f4333c"
  },
  "am_steps_item_error_tail__am_steps_item_tail_after": {
    "backgroundColor": "#f4333c"
  },
  "am_steps_horizontal_not__am_steps_label_vertical___am_steps_item": {
    "marginRight": "10px"
  },
  "am_steps_horizontal_not__am_steps_label_vertical___am_steps_item_last_child": {
    "marginRight": "0"
  },
  "am_steps_horizontal_not__am_steps_label_vertical___am_steps_item_tail": {
    "display": "none"
  },
  "am_steps_horizontal_not__am_steps_label_vertical___am_steps_item_description": {
    "maxWidth": "100px"
  },
  "am_steps_item_custom__am_steps_item_icon": {
    "background": "none",
    "border": "0",
    "width": "auto",
    "height": "auto"
  },
  "am_steps_item_custom__am_steps_item_icon____am_steps_icon": {
    "fontSize": "22px",
    "top": "1px",
    "width": "22px",
    "height": "22px"
  },
  "am_steps_item_custom_am_steps_item_process__am_steps_item_icon____am_steps_icon": {
    "color": "#108ee9"
  },
  "am_steps_small__am_steps_item_icon": {
    "width": "18px",
    "height": "18px",
    "lineHeight": "18px",
    "textAlign": "center",
    "borderRadius": "18px",
    "fontSize": "14px",
    "marginRight": "8px"
  },
  "am_steps_small__am_steps_item_icon____am_steps_icon": {
    "fontSize": "12px",
    "WebkitTransform": "scale(0.75)",
    "MsTransform": "scale(0.75)",
    "transform": "scale(0.75)",
    "top": "-2px"
  },
  "am_steps_small__am_steps_item_content": {
    "marginTop": "0"
  },
  "am_steps_small__am_steps_item_title": {
    "fontSize": "16px",
    "marginBottom": "3px",
    "color": "#000",
    "fontWeight": "bold"
  },
  "am_steps_small__am_steps_item_description": {
    "fontSize": "12px",
    "color": "#bbb"
  },
  "am_steps_small__am_steps_item_tail": {
    "top": "8px",
    "padding": "0 8px"
  },
  "am_steps_small__am_steps_item_tail_after": {
    "height": "1px",
    "borderRadius": "1px",
    "width": "100%",
    "left": "0"
  },
  "am_steps_small__am_steps_item_custom__am_steps_item_icon": {
    "background": "none"
  },
  "am_steps_small__am_steps_item_custom__am_steps_item_icon____am_steps_icon": {
    "fontSize": "18px",
    "top": "-2px",
    "WebkitTransform": "none",
    "MsTransform": "none",
    "transform": "none"
  },
  "am_steps_vertical": {
    "display": "block"
  },
  "am_steps_vertical__am_steps_item": {
    "display": "block",
    "overflow": "visible"
  },
  "am_steps_vertical__am_steps_item_icon": {
    "float": "left"
  },
  "am_steps_vertical__am_steps_item_icon_inner": {
    "marginRight": "16px"
  },
  "am_steps_vertical__am_steps_item_content": {
    "minHeight": "48px",
    "overflow": "hidden",
    "display": "block"
  },
  "am_steps_vertical__am_steps_item_title": {
    "lineHeight": "26px"
  },
  "am_steps_vertical__am_steps_item_title_after": {
    "display": "none"
  },
  "am_steps_vertical__am_steps_item_description": {
    "paddingBottom": "12px"
  },
  "am_steps_vertical__am_steps_item_tail": {
    "position": "absolute",
    "left": "13px",
    "top": "0",
    "height": "100%",
    "width": "1px",
    "padding": "30px 0 4px 0"
  },
  "am_steps_vertical__am_steps_item_tail_after": {
    "height": "100%",
    "width": "1px"
  },
  "am_steps_vertical_am_steps_small__am_steps_item_tail": {
    "position": "absolute",
    "left": "9px",
    "top": "0",
    "padding": "22px 0 4px 0"
  },
  "am_steps_vertical_am_steps_small__am_steps_item_title": {
    "lineHeight": "18px"
  },
  "am_steps_label_vertical__am_steps_item": {
    "overflow": "visible"
  },
  "am_steps_label_vertical__am_steps_item_tail": {
    "padding": "0 24px",
    "marginLeft": "48px"
  },
  "am_steps_label_vertical__am_steps_item_content": {
    "display": "block",
    "textAlign": "center",
    "marginTop": "8px",
    "width": "100px"
  },
  "am_steps_label_vertical__am_steps_item_icon": {
    "display": "inline-block",
    "marginLeft": "36px"
  },
  "am_steps_label_vertical__am_steps_item_title": {
    "paddingRight": "0"
  },
  "am_steps_label_vertical__am_steps_item_title_after": {
    "display": "none"
  },
  "am_swipe": {
    "overflow": "hidden",
    "position": "relative"
  },
  "am_swipe_content": {
    "position": "relative",
    "backgroundColor": "#fff"
  },
  "am_swipe_cover": {
    "position": "absolute",
    "zIndex": "2",
    "background": "transparent",
    "height": "100%",
    "width": "100%",
    "top": "0",
    "display": "none"
  },
  "am_swipe__am_swipe_content": {
    "WebkitTransition": "all 250ms",
    "transition": "all 250ms"
  },
  "am_swipe__am_swipe_actions": {
    "WebkitTransition": "all 250ms",
    "transition": "all 250ms"
  },
  "am_swipe_swiping__am_swipe_content": {
    "WebkitTransition": "none",
    "transition": "none"
  },
  "am_swipe_swiping__am_swipe_actions": {
    "WebkitTransition": "none",
    "transition": "none"
  },
  "am_swipe_swiping__am_list_item_active": {
    "backgroundColor": "#FFF"
  },
  "am_swipe_actions": {
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "display": "flex",
    "overflow": "hidden",
    "whiteSpace": "nowrap"
  },
  "am_swipe_actions_left": {
    "left": "0"
  },
  "am_swipe_actions_right": {
    "right": "0"
  },
  "am_swipe_btn": {
    "display": "flex",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "overflow": "hidden"
  },
  "am_swipe_btn_text": {
    "padding": "0 8px"
  },
  "am_switch": {
    "display": "inline-block",
    "verticalAlign": "middle",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "position": "relative",
    "cursor": "pointer",
    "WebkitAlignSelf": "center",
    "MsFlexItemAlign": "center",
    "alignSelf": "center"
  },
  "am_switch__checkbox": {
    "width": "51px",
    "height": "31px",
    "borderRadius": "31px",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "background": "#e5e5e5",
    "zIndex": "0",
    "margin": "0",
    "padding": "0",
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "border": "0",
    "cursor": "pointer",
    "position": "relative",
    "WebkitTransition": "all 300ms",
    "transition": "all 300ms"
  },
  "am_switch__checkbox_before": {
    "content": "' '",
    "position": "absolute",
    "left": "2px",
    "top": "2px",
    "width": "47px",
    "height": "27px",
    "borderRadius": "27px",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "background": "#fff",
    "zIndex": "1",
    "WebkitTransition": "all 200ms",
    "transition": "all 200ms",
    "WebkitTransform": "scale(1)",
    "MsTransform": "scale(1)",
    "transform": "scale(1)"
  },
  "am_switch__checkbox_after": {
    "content": "' '",
    "width": "27px",
    "height": "27px",
    "borderRadius": "27px",
    "background": "#fff",
    "position": "absolute",
    "zIndex": "2",
    "top": "2px",
    "left": "2px",
    "WebkitTransform": "translateX(0)",
    "MsTransform": "translateX(0)",
    "transform": "translateX(0)",
    "WebkitTransition": "all 200ms",
    "transition": "all 200ms",
    "WebkitBoxShadow": "0 0 2px 0 rgba(0, 0, 0, 0.2), 0 2px 11.5px 0 rgba(0, 0, 0, 0.08), -1px 2px 2px 0 rgba(0, 0, 0, 0.1)",
    "boxShadow": "0 0 2px 0 rgba(0, 0, 0, 0.2), 0 2px 11.5px 0 rgba(0, 0, 0, 0.08), -1px 2px 2px 0 rgba(0, 0, 0, 0.1)"
  },
  "am_switch__checkbox_checkbox_disabled": {
    "zIndex": "3"
  },
  "am_switch_input_type__checkbox": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "opacity": "0",
    "width": "100%",
    "height": "100%",
    "zIndex": "2",
    "border": "0 none",
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none"
  },
  "am_switch_input_type__checkbox___checked____checkbox": {
    "background": "#4dd865"
  },
  "am_switch_input_type__checkbox___checked____checkbox_before": {
    "WebkitTransform": "scale(0)",
    "MsTransform": "scale(0)",
    "transform": "scale(0)"
  },
  "am_switch_input_type__checkbox___checked____checkbox_after": {
    "WebkitTransform": "translateX(20px)",
    "MsTransform": "translateX(20px)",
    "transform": "translateX(20px)"
  },
  "am_switch_input_type__checkbox___disabled____checkbox": {
    "opacity": "0.3"
  },
  "am_switch_am_switch_android__checkbox": {
    "width": "72px",
    "height": "23px",
    "borderRadius": "3px",
    "background": "#a7aaa6"
  },
  "am_switch_am_switch_android__checkbox_before": {
    "display": "none"
  },
  "am_switch_am_switch_android__checkbox_after": {
    "width": "35px",
    "height": "21px",
    "borderRadius": "2px",
    "WebkitBoxShadow": "none",
    "boxShadow": "none",
    "left": "1PX",
    "top": "1PX"
  },
  "am_switch_am_switch_android_input_type__checkbox___checked____checkbox": {
    "background": "#108ee9"
  },
  "am_switch_am_switch_android_input_type__checkbox___checked____checkbox_before": {
    "WebkitTransform": "scale(0)",
    "MsTransform": "scale(0)",
    "transform": "scale(0)"
  },
  "am_switch_am_switch_android_input_type__checkbox___checked____checkbox_after": {
    "WebkitTransform": "translateX(35px)",
    "MsTransform": "translateX(35px)",
    "transform": "translateX(35px)"
  },
  "am_tabs": {
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box"
  },
  "am_tabs_content_wrap": {
    "display": "flex",
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "width": "100%",
    "height": "100%",
    "minHeight": "0"
  },
  "am_tabs_content_wrap_animated": {
    "WebkitTransition": "left 0.3s cubic-bezier(0.35, 0, 0.25, 1), top 0.3s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1)",
    "transition": "transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1), top 0.3s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1)",
    "willChange": "transform, left, top"
  },
  "am_tabs_pane_wrap": {
    "width": "100%",
    "WebkitFlexShrink": "0",
    "MsFlexNegative": "0",
    "flexShrink": "0",
    "overflowY": "auto"
  },
  "am_tabs_tab_bar_wrap": {
    "WebkitFlexShrink": "0",
    "MsFlexNegative": "0",
    "flexShrink": "0"
  },
  "am_tabs_horizontal__am_tabs_pane_wrap_active": {
    "height": "auto"
  },
  "am_tabs_horizontal__am_tabs_pane_wrap_inactive": {
    "height": "0",
    "overflow": "visible"
  },
  "am_tabs_vertical__am_tabs_content_wrap": {
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column"
  },
  "am_tabs_vertical__am_tabs_tab_bar_wrap": {
    "height": "100%"
  },
  "am_tabs_vertical__am_tabs_pane_wrap": {
    "height": "100%"
  },
  "am_tabs_vertical__am_tabs_pane_wrap_active": {
    "overflow": "auto"
  },
  "am_tabs_vertical__am_tabs_pane_wrap_inactive": {
    "overflow": "hidden"
  },
  "am_tabs_top": {
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column"
  },
  "am_tabs_bottom": {
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column"
  },
  "am_tabs_left": {
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "row",
    "MsFlexDirection": "row",
    "flexDirection": "row"
  },
  "am_tabs_right": {
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "row",
    "MsFlexDirection": "row",
    "flexDirection": "row"
  },
  "am_tabs_default_bar": {
    "position": "relative",
    "display": "flex",
    "WebkitFlexShrink": "0",
    "MsFlexNegative": "0",
    "flexShrink": "0",
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "row",
    "MsFlexDirection": "row",
    "flexDirection": "row",
    "width": "100%",
    "height": "100%",
    "overflow": "visible",
    "zIndex": "1"
  },
  "am_tabs_default_bar_tab": {
    "position": "relative",
    "display": "flex",
    "WebkitFlexShrink": "0",
    "MsFlexNegative": "0",
    "flexShrink": "0",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "fontSize": "15px",
    "height": "43.5px",
    "lineHeight": "43.5px"
  },
  "am_tabs_default_bar_tab__am_badge__am_badge_text": {
    "top": "-13px",
    "WebkitTransform": "translateX(-5px)",
    "MsTransform": "translateX(-5px)",
    "transform": "translateX(-5px)"
  },
  "am_tabs_default_bar_tab__am_badge__am_badge_dot": {
    "top": "-6px",
    "WebkitTransform": "translateX(0)",
    "MsTransform": "translateX(0)",
    "transform": "translateX(0)"
  },
  "am_tabs_default_bar_tab_active": {
    "color": "#108ee9"
  },
  "am_tabs_default_bar_underline": {
    "position": "absolute",
    "border": "1px #108ee9 solid",
    "WebkitTransform": "translate3d(0, 0, 0)",
    "transform": "translate3d(0, 0, 0)"
  },
  "am_tabs_default_bar_animated__am_tabs_default_bar_content": {
    "WebkitTransition": "-webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1)",
    "transition": "transform 0.3s cubic-bezier(0.35, 0, 0.25, 1), -webkit-transform 0.3s cubic-bezier(0.35, 0, 0.25, 1)",
    "willChange": "transform"
  },
  "am_tabs_default_bar_animated__am_tabs_default_bar_underline": {
    "WebkitTransition": "top 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1), color 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.3s cubic-bezier(0.35, 0, 0.25, 1)",
    "transition": "top 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1), color 0.3s cubic-bezier(0.35, 0, 0.25, 1), width 0.3s cubic-bezier(0.35, 0, 0.25, 1)",
    "willChange": "top, left, width, color"
  },
  "am_tabs_default_bar_top": {
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "row",
    "MsFlexDirection": "row",
    "flexDirection": "row"
  },
  "am_tabs_default_bar_bottom": {
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "row",
    "MsFlexDirection": "row",
    "flexDirection": "row"
  },
  "am_tabs_default_bar_top__am_tabs_default_bar_content": {
    "display": "flex",
    "width": "100%",
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "row",
    "MsFlexDirection": "row",
    "flexDirection": "row"
  },
  "am_tabs_default_bar_bottom__am_tabs_default_bar_content": {
    "display": "flex",
    "width": "100%",
    "WebkitBoxOrient": "horizontal",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "row",
    "MsFlexDirection": "row",
    "flexDirection": "row"
  },
  "am_tabs_default_bar_top__am_tabs_default_bar_prevpage": {
    "pointerEvents": "none",
    "position": "absolute",
    "top": "0",
    "display": "block",
    "width": "59px",
    "height": "100%",
    "content": "' '",
    "zIndex": "999",
    "left": "0",
    "background": "linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0))"
  },
  "am_tabs_default_bar_bottom__am_tabs_default_bar_prevpage": {
    "pointerEvents": "none",
    "position": "absolute",
    "top": "0",
    "display": "block",
    "width": "59px",
    "height": "100%",
    "content": "' '",
    "zIndex": "999",
    "left": "0",
    "background": "linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0))"
  },
  "am_tabs_default_bar_top__am_tabs_default_bar_nextpage": {
    "pointerEvents": "none",
    "position": "absolute",
    "top": "0",
    "display": "block",
    "width": "59px",
    "height": "100%",
    "content": "' '",
    "zIndex": "999",
    "right": "0",
    "background": "linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff)"
  },
  "am_tabs_default_bar_bottom__am_tabs_default_bar_nextpage": {
    "pointerEvents": "none",
    "position": "absolute",
    "top": "0",
    "display": "block",
    "width": "59px",
    "height": "100%",
    "content": "' '",
    "zIndex": "999",
    "right": "0",
    "background": "linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff)"
  },
  "am_tabs_default_bar_top__am_tabs_default_bar_tab": {
    "borderBottom": "1PX solid #ddd"
  },
  "am_tabs_default_bar_bottom__am_tabs_default_bar_tab": {
    "borderTop": "1PX solid #ddd"
  },
  "am_tabs_default_bar_top__am_tabs_default_bar_underline": {
    "bottom": "0"
  },
  "am_tabs_default_bar_bottom__am_tabs_default_bar_underline": {
    "bottom": "0"
  },
  "am_tabs_default_bar_left": {
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column"
  },
  "am_tabs_default_bar_right": {
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column"
  },
  "am_tabs_default_bar_left__am_tabs_default_bar_content": {
    "display": "flex",
    "height": "100%",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column"
  },
  "am_tabs_default_bar_right__am_tabs_default_bar_content": {
    "display": "flex",
    "height": "100%",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column"
  },
  "am_tabs_default_bar_left__am_tabs_default_bar_tab": {
    "borderRight": "1PX solid #ddd"
  },
  "am_tabs_default_bar_right__am_tabs_default_bar_tab": {
    "borderLeft": "1PX solid #ddd"
  },
  "am_tabs_default_bar_left__am_tabs_default_bar_underline": {
    "right": "0"
  },
  "am_tabs_default_bar_right__am_tabs_default_bar_underline": {
    "left": "0"
  },
  "am_tab_bar": {
    "height": "100%",
    "overflow": "hidden"
  },
  "am_tab_bar_bar": {
    "position": "relative",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "height": "50px",
    "borderTop": "1PX solid #ddd",
    "width": "100%",
    "display": "flex",
    "WebkitTransitionDuration": ".2s",
    "transitionDuration": ".2s",
    "WebkitTransitionProperty": "height bottom",
    "transitionProperty": "height bottom",
    "zIndex": "100",
    "WebkitJustifyContent": "space-around",
    "MsFlexPack": "distribute",
    "justifyContent": "space-around",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "bottom": "0"
  },
  "am_tab_bar_bar_hidden_top": {
    "bottom": "50px",
    "height": "0"
  },
  "am_tab_bar_bar_hidden_bottom": {
    "bottom": "-50px",
    "height": "0"
  },
  "am_tab_bar_bar__am_tab_bar_tab": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "display": "flex",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "WebkitBoxOrient": "vertical",
    "WebkitBoxDirection": "normal",
    "WebkitFlexDirection": "column",
    "MsFlexDirection": "column",
    "flexDirection": "column",
    "textAlign": "center",
    "width": "100%"
  },
  "am_tab_bar_bar__am_tab_bar_tab_image": {
    "width": "22px",
    "height": "22px",
    "verticalAlign": "middle"
  },
  "am_tab_bar_bar__am_tab_bar_tab_title": {
    "fontSize": "10px",
    "margin": "3px 0 0 0",
    "lineHeight": "1",
    "textAlign": "center"
  },
  "am_tab_bar_bar__am_tab_bar_tab_icon": {
    "display": "flex",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center"
  },
  "am_tab_bar_bar__am_tab_bar_tab_icon__tab_badge__last_child": {
    "marginTop": "4px",
    "left": "22px"
  },
  "am_tab_bar_bar__am_tab_bar_tab_icon__tab_dot__last_child": {
    "marginTop": "4px",
    "left": "22px"
  },
  "am_tab_bar_item": {
    "height": "100%"
  },
  "am_tag": {
    "display": "inline-block",
    "position": "relative",
    "fontSize": "14px",
    "textAlign": "center",
    "padding": "0 15px",
    "height": "25px",
    "lineHeight": "25px",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box"
  },
  "am_tag_am_tag_small": {
    "height": "15px",
    "lineHeight": "15px",
    "padding": "0 5px",
    "fontSize": "10px"
  },
  "am_tag_normal": {
    "backgroundColor": "#fff",
    "color": "#888",
    "border": "1PX solid #ddd",
    "borderRadius": "3px"
  },
  "am_tag_active": {
    "backgroundColor": "#fff",
    "color": "#108ee9",
    "border": "1PX solid #108ee9",
    "borderRadius": "3px"
  },
  "am_tag_disabled": {
    "color": "#bbb",
    "backgroundColor": "#ddd",
    "border": "1PX solid #ddd",
    "borderRadius": "3px"
  },
  "am_tag_close": {
    "position": "absolute",
    "top": "-9px",
    "left": "-10px",
    "color": "#bbb"
  },
  "am_tag_close_active": {
    "color": "#888"
  },
  "am_tag_close__am_icon": {
    "backgroundColor": "#fff",
    "borderRadius": "9px"
  },
  "am_list__am_list_item_am_textarea_item": {
    "display": "flex",
    "WebkitBoxAlign": "start",
    "WebkitAlignItems": "flex-start",
    "MsFlexAlign": "start",
    "alignItems": "flex-start",
    "WebkitBoxSizing": "border-box",
    "boxSizing": "border-box",
    "minHeight": "44px",
    "paddingLeft": "15px",
    "paddingRight": "15px",
    "borderBottom": "1PX solid #ddd"
  },
  "am_list__am_list_item_am_textarea_item_am_textarea_item_single_line": {
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center"
  },
  "am_list__am_list_item_am_textarea_item_am_textarea_item_single_line__am_textarea_label": {
    "WebkitAlignSelf": "center",
    "MsFlexItemAlign": "center",
    "alignSelf": "center"
  },
  "am_list__am_list_item_am_textarea_item_am_textarea_item_single_line__am_textarea_control": {
    "paddingTop": "0",
    "paddingBottom": "0"
  },
  "am_list__am_list_item_am_textarea_item_am_textarea_item_single_line__am_textarea_control_textarea": {
    "lineHeight": "25.5px"
  },
  "am_list__am_list_item_am_textarea_item_am_textarea_item_single_line__am_textarea_clear": {
    "marginTop": "0"
  },
  "am_list__am_list_item_am_textarea_item_am_textarea_item_single_line_am_textarea_error__am_textarea_error_extra": {
    "marginTop": "0"
  },
  "am_textarea_label": {
    "WebkitAlignSelf": "flex-start",
    "MsFlexItemAlign": "start",
    "alignSelf": "flex-start",
    "color": "#000",
    "textAlign": "left",
    "minHeight": "44px",
    "fontSize": "17px",
    "lineHeight": "44px",
    "marginLeft": "0",
    "marginRight": "5px",
    "whiteSpace": "nowrap",
    "overflow": "hidden"
  },
  "am_textarea_label_am_textarea_label_2": {
    "width": "34px"
  },
  "am_textarea_label_am_textarea_label_3": {
    "width": "51px"
  },
  "am_textarea_label_am_textarea_label_4": {
    "width": "68px"
  },
  "am_textarea_label_am_textarea_label_5": {
    "width": "85px"
  },
  "am_textarea_label_am_textarea_label_6": {
    "width": "102px"
  },
  "am_textarea_label_am_textarea_label_7": {
    "width": "119px"
  },
  "am_textarea_control": {
    "WebkitBoxFlex": "1",
    "WebkitFlex": "1",
    "MsFlex": "1",
    "flex": "1",
    "paddingTop": "10px",
    "paddingBottom": "9px"
  },
  "am_textarea_control_textarea": {
    "color": "#000",
    "fontSize": "17px",
    "lineHeight": "25.5px",
    "WebkitAppearance": "none",
    "MozAppearance": "none",
    "appearance": "none",
    "width": "100%",
    "padding": "0",
    "border": "0",
    "backgroundColor": "transparent",
    "overflow": "visible",
    "display": "block",
    "resize": "none",
    "wordBreak": "break-word",
    "wordWrap": "break-word"
  },
  "am_textarea_control_textarea___webkit_input_placeholder": {
    "color": "#bbb"
  },
  "am_textarea_control_textarea___moz_placeholder": {
    "color": "#bbb"
  },
  "am_textarea_control_textarea___ms_input_placeholder": {
    "color": "#bbb"
  },
  "am_textarea_control_textarea__placeholder": {
    "color": "#bbb"
  },
  "am_textarea_control_textarea_disabled": {
    "color": "#bbb",
    "backgroundColor": "#fff"
  },
  "am_textarea_clear": {
    "display": "none",
    "width": "21px",
    "height": "21px",
    "marginTop": "12px",
    "borderRadius": "50%",
    "overflow": "hidden",
    "fontStyle": "normal",
    "color": "#fff",
    "backgroundColor": "#ccc",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "21px auto",
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D'%23fff'%20width%3D'24'%20height%3D'24'%20viewBox%3D'0%200%2024%2024'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cpath%20d%3D'M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z'%2F%3E%3Cpath%20d%3D'M0%200h24v24H0z'%20fill%3D'none'%2F%3E%3C%2Fsvg%3E\")"
  },
  "am_textarea_clear_active": {
    "backgroundColor": "#108ee9"
  },
  "am_textarea_focus__am_textarea_clear": {
    "display": "block"
  },
  "am_textarea_has_count": {
    "paddingBottom": "14px"
  },
  "am_textarea_count": {
    "position": "absolute",
    "bottom": "6px",
    "right": "5px",
    "color": "#bbb",
    "fontSize": "14px"
  },
  "am_textarea_count_span": {
    "color": "#000"
  },
  "am_textarea_error__am_textarea_control_textarea": {
    "color": "#f50"
  },
  "am_textarea_error__am_textarea_error_extra": {
    "marginTop": "12px",
    "width": "21px",
    "height": "21px",
    "marginLeft": "8px",
    "backgroundSize": "21px 21px",
    "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D'18'%20height%3D'18'%20viewBox%3D'0%200%2018%2018'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke%3D'none'%20stroke-width%3D'1'%20fill%3D'none'%20fill-rule%3D'evenodd'%3E%3Cg%20transform%3D'translate(-300.000000%2C%20-1207.000000)'%20fill%3D'%23FF5500'%3E%3Cg%20id%3D'exclamation-circle-o'%20transform%3D'translate(300.000000%2C%201207.000000)'%3E%3Cpath%20d%3D'M9%2C16.734375%20C10.0441406%2C16.734375%2011.0566406%2C16.5304688%2012.009375%2C16.1279297%20C12.9304688%2C15.7376953%2013.7566406%2C15.1804687%2014.4685547%2C14.4703125%20C15.1787109%2C13.7601563%2015.7376953%2C12.9322266%2016.1261719%2C12.0111328%20C16.5304688%2C11.0566406%2016.734375%2C10.0441406%2016.734375%2C9%20C16.734375%2C7.95585938%2016.5304688%2C6.94335938%2016.1279297%2C5.990625%20C15.7376953%2C5.06953125%2015.1804687%2C4.24335938%2014.4703125%2C3.53144531%20C13.7601563%2C2.82128906%2012.9322266%2C2.26230469%2012.0111328%2C1.87382813%20C11.0566406%2C1.46953125%2010.0441406%2C1.265625%209%2C1.265625%20C7.95585938%2C1.265625%206.94335938%2C1.46953125%205.990625%2C1.87207031%20C5.06953125%2C2.26230469%204.24335938%2C2.81953125%203.53144531%2C3.5296875%20C2.82128906%2C4.23984375%202.26230469%2C5.06777344%201.87382813%2C5.98886719%20C1.46953125%2C6.94335938%201.265625%2C7.95585938%201.265625%2C9%20C1.265625%2C10.0441406%201.46953125%2C11.0566406%201.87207031%2C12.009375%20C2.26230469%2C12.9304688%202.81953125%2C13.7566406%203.5296875%2C14.4685547%20C4.23984375%2C15.1787109%205.06777344%2C15.7376953%205.98886719%2C16.1261719%20C6.94335938%2C16.5304688%207.95585938%2C16.734375%209%2C16.734375%20L9%2C16.734375%20Z%20M9%2C18%20C4.02890625%2C18%200%2C13.9710937%200%2C9%20C0%2C4.02890625%204.02890625%2C0%209%2C0%20C13.9710937%2C0%2018%2C4.02890625%2018%2C9%20C18%2C13.9710937%2013.9710937%2C18%209%2C18%20L9%2C18%20L9%2C18%20Z%20M9%2C6.75%20C8.61152344%2C6.75%208.296875%2C7.06464844%208.296875%2C7.453125%20L8.296875%2C13.9394531%20C8.296875%2C14.3279297%208.61152344%2C14.6425781%209%2C14.6425781%20C9.38847656%2C14.6425781%209.703125%2C14.3279297%209.703125%2C13.9394531%20L9.703125%2C7.453125%20C9.703125%2C7.06464844%209.38847656%2C6.75%209%2C6.75%20L9%2C6.75%20Z%20M8.20898438%2C4.83398438%20C8.20898438%2C5.27085024%208.56313413%2C5.625%209%2C5.625%20C9.43686587%2C5.625%209.79101562%2C5.27085024%209.79101562%2C4.83398438%20C9.79101562%2C4.39711851%209.43686587%2C4.04296875%209%2C4.04296875%20C8.56313413%2C4.04296875%208.20898438%2C4.39711851%208.20898438%2C4.83398438%20L8.20898438%2C4.83398438%20Z'%20id%3D'Shape'%20transform%3D'translate(9.000000%2C%209.000000)%20scale(1%2C%20-1)%20translate(-9.000000%2C%20-9.000000)%20'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\")"
  },
  "am_textarea_disabled__am_textarea_label": {
    "color": "#bbb"
  },
  "am_list_body__am_list_item_last_child": {
    "borderBottom": "0"
  },
  "am_list_body__am_list_item_last_child_after": {
    "display": "none !important"
  },
  "am_toast": {
    "position": "fixed",
    "width": "100%",
    "zIndex": "1999",
    "fontSize": "14px",
    "textAlign": "center"
  },
  "am_toast___span": {
    "maxWidth": "50%"
  },
  "am_toast_am_toast_mask": {
    "height": "100%",
    "display": "flex",
    "WebkitBoxPack": "center",
    "WebkitJustifyContent": "center",
    "MsFlexPack": "center",
    "justifyContent": "center",
    "WebkitBoxAlign": "center",
    "WebkitAlignItems": "center",
    "MsFlexAlign": "center",
    "alignItems": "center",
    "left": "0",
    "top": "0",
    "WebkitTransform": "translateZ(1px)",
    "transform": "translateZ(1px)"
  },
  "am_toast_am_toast_nomask": {
    "position": "fixed",
    "maxWidth": "50%",
    "width": "auto",
    "left": "50%",
    "top": "50%",
    "WebkitTransform": "translateZ(1px)",
    "transform": "translateZ(1px)"
  },
  "am_toast_am_toast_nomask__am_toast_notice": {
    "WebkitTransform": "translateX(-50%) translateY(-50%)",
    "MsTransform": "translateX(-50%) translateY(-50%)",
    "transform": "translateX(-50%) translateY(-50%)"
  },
  "am_toast_notice_content__am_toast_text": {
    "minWidth": "60px",
    "borderRadius": "3px",
    "color": "#fff",
    "backgroundColor": "rgba(58, 58, 58, 0.9)",
    "lineHeight": "1.5",
    "padding": "9px 15px"
  },
  "am_toast_notice_content__am_toast_text_am_toast_text_icon": {
    "borderRadius": "5px",
    "padding": "15px 15px"
  },
  "am_toast_notice_content__am_toast_text_am_toast_text_icon__am_toast_text_info": {
    "marginTop": "6px"
  },
  "am_whitespace_am_whitespace_xs": {
    "height": "3px"
  },
  "am_whitespace_am_whitespace_sm": {
    "height": "6px"
  },
  "am_whitespace_am_whitespace_md": {
    "height": "9px"
  },
  "am_whitespace_am_whitespace_lg": {
    "height": "15px"
  },
  "am_whitespace_am_whitespace_xl": {
    "height": "21px"
  },
  "am_wingblank": {
    "marginLeft": "8px",
    "marginRight": "8px"
  },
  "am_wingblank_am_wingblank_sm": {
    "marginLeft": "5px",
    "marginRight": "5px"
  },
  "am_wingblank_am_wingblank_md": {
    "marginLeft": "8px",
    "marginRight": "8px"
  },
  "am_wingblank_am_wingblank_lg": {
    "marginLeft": "15px",
    "marginRight": "15px"
  }
}

export default style