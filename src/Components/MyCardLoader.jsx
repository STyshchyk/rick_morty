import React from "react"
import ContentLoader from "react-content-loader"

const MyCardLoader = (props) => (
    <ContentLoader
        speed={2}
        width={240}
        height={240}
        viewBox="0 0 240 240"
        backgroundColor="#ffffff"
        foregroundColor="#b5e8c9"
        {...props}
    >
        <rect x="505" y="198" rx="3" ry="3" width="88" height="6" />
        <rect x="569" y="205" rx="3" ry="3" width="52" height="6" />
        <rect x="487" y="195" rx="3" ry="3" width="410" height="6" />
        <rect x="509" y="195" rx="3" ry="3" width="380" height="6" />
        <rect x="10" y="125" rx="3" ry="3" width="178" height="6" />
        <circle cx="598" cy="196" r="20" />
        <rect x="120" y="53" rx="0" ry="0" width="1" height="1" />
        <rect x="121" y="52" rx="0" ry="0" width="1" height="1" />
        <rect x="0" y="0" rx="0" ry="0" width="240" height="140" />
        <rect x="4" y="156" rx="0" ry="0" width="136" height="17" />
        <rect x="4" y="184" rx="0" ry="0" width="133" height="15" />
        <rect x="213" y="232" rx="0" ry="0" width="1" height="1" />
    </ContentLoader>
)

export default MyCardLoader

