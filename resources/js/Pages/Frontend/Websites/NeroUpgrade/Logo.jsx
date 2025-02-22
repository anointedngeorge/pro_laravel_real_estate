

export const NeroLogo = ({ width = '75px', height = '75px', settings }) => {
    return (
        <img
            style={{ width: width, height: height }}
            src={`/storage/${settings['logo']}` || "../nero/img/logo/logo.png"}
            className="img-fluid"
            alt={settings['title']}
        />
    )
}