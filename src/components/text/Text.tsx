import './text.css'

type TextProps = {
    text?: string
    primaryText?: boolean
    color?: string
}

const Text = (props: TextProps) => {
    const { text, primaryText, color } = props
    const hasText = text || 'no data'
    const textStyle = primaryText ? 'primaryTextStyle' : 'secondaryTextStyle'
    return (
        <div>
            <p className={textStyle}>{hasText}</p>
        </div>
    )
}

export default Text