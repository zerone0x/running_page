interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Journey',
  siteUrl: 'https://angryrun.vercel.app/',
  logo: 'https://qph.cf2.poecdn.net/main-132223687_38639513287_2_1.png?w=1024&h=1024',
  description: 'Personal site and blog',
  navLinks: [
    // {
    //   name: 'Blog',
    //   url: 'https://craftship.xyz/',
  
  ],
};

export default data;
