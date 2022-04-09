import React, { Component } from "react";

export default class EmbedSocialWidget extends Component {
    render() {
        const props: any = {
            className:"embedsocial-hashtag", dataref:this.props.refId
        }
        return (
            <div{ ...props}></div>
        );
    }

    componentDidMount() {
        (function (d, s, id) {
            var js;
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://embedsocial.com/embedscript/ri.js";
            d.getElementsByTagName("head")[0].appendChild(js);
        })(document, "script", "EmbedSocialReviewScript");
    }
}