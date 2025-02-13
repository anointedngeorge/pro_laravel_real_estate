

export const NeroLogo = ({ width = '60px', height = '60px', settings }) => {
    return (
        <img
            style={{ width: width, height: height }}
            src={`storage/${settings['logo']}` || "../nero/img/logo/logo.png"}
            className="img-fluid"
            alt={settings['title']}
        />
    )
}