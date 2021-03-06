{
    getArticle: function () {
        return $(".invitation_content");
    },
    handle: function ({registerHandler, output, commonOutput}) {
        registerHandler("P", function ($dom) {
            if ($dom.find("[dateline]").length) { //image

                $dom = $dom.find("[dateline]");
                var url = $dom.data("original");
                return {
                    name: "pic_link_full_default_empty_gap",
                    data: {
                        src: url
                    }
                };
            } else {
                var text = $dom.text();
                if (text) {
                    return {
                        name: "two_level_p",
                        data: {
                            data: text
                        }
                    };
                }

            }
        });
    }
}