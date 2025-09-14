import logo from '/images/pataspepas.webp'
import psLogo from '/images/ps-logo.svg'
import xLogo from '/images/x-logo.svg'

const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <img src={logo} alt="logo" className="entrance-logo" />

        <div className="text-wrapper">
          <h3 className="gradient-title">
            Estreno <br /> 15 de Octubre <br /> 2025
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src={psLogo} className="md:w-32 w-20" />
          <img src={xLogo} className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  )
}

export default ComingSoon
