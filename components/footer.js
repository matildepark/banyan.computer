export default function Footer() {
  return (
    <footer className="w-full flex flex-col space-y-8 bg-lightgray text-black p-8 py-16 lg:px-4 mx-auto">
      <img className="w-full p-4" src="/logodark.svg" />
      <div className="flex flex-col md:flex-row space-y-12 md:space-y-0">
        <h3 className="basis-1/3 font-bold text-blue font-body text-4xl tracking-tighter">
          The marketplace
          <br />
          for trustless storage
        </h3>
        <h3 className="basis-1/3 font-body text-4xl text-gray font-normal tracking-[-0.07em]">
          Get in touch
          <a href="mailto:info@banyan.computer" className="block text-black">
            info@banyan.computer
          </a>
        </h3>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 basis-1/3 justify-between">
          <div className="flex flex-col md:items-center justify-center md:space-y-1 font-body text-4xl md:text-base font-normal md:font-medium tracking-[-0.07em]">
            <h3 className="md:hidden text-gray font-normal tracking-[-0.07em] text-4xl">
              Learn more
            </h3>
            <a
              className="md:border-b leading-tight"
              href="https://github.com/banyancomputer"
            >
              GitHub
            </a>
            <a
              className="md:border-b leading-tight"
              href="https://banyan-storage-inc.breezy.hr"
            >
              Breezy
            </a>
            <a
              className="md:border-b leading-tight"
              href="https://twitter.com/banyandotcomputer"
            >
              Twitter
            </a>
          </div>
          <p className="text-gray">
            © Banyan LLC 2022
            <br />
            2045 W Grand Ave Ste B PMB 98926
            <br />
            Chicago, Illinois 60612-1577 US
          </p>
        </div>
      </div>
    </footer>
  );
}
