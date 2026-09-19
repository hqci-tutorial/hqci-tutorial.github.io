//  <strong>[Important] This your only chance to save your access token!</strong> 
//         While doing this, they will inform you to save an access token. Typically, this kind of access token is not available once you miss it. So, copy the access token and save it somewhere. See below how to do so.`,

type Step = {
  text: string;
  desc?: string;
  link: string | null;
  download?: string;
  image: string | null;
  image_alt: string | null;
  code?: string;
};

type Prep = {
  id: string;
  title: string;
  desc: string | null;
  steps: Step[];
};

export const PrepInstructions: Prep[] = [
  {
    id: "create-account",
    title: "Create and set up an IBM Cloud account",
    desc: "Only if you don't have one yet! You can skip this part if you don't want to try out a real quantum computer. Creating an IBM account will give you 10-minute credit per month (USD 1.60 per second after 10 minutes).",
    steps: [
      {
        text: "Access IBM Cloud portal",
        link: "https://cloud.ibm.com/login",
        image: null,
        image_alt: null
      }, {
        text: `Click "Create an account," "Continue with Google," or "Continue with Red Hat" (whichever works for you). At this stage, you'll asked to provide your credit card information for verification purposes. You won't be charged.`,
        desc: 'If this process is asking too much of your personal information at this step (e.g., your photo ID copies), please do not proceed. (It seems IBM automatically flags accesses out of U.S.).',
        link: null,
        image: null,
        image_alt: null
      }, {
        text: `Sign in with your account. Then, you will see IBM Cloud dashboard.`,
        link: null,
        image: null,
        image_alt: null
      }, {
        text: `From the dashboard, type "Quantum Compute" in the search bar. Then, click the suggested option.`,
        link: null,
        image: 'access-to-quantum-compute.png',
        image_alt: "Typing Quantum Compute in IBM Cloud's search bar to access IBM's quantum computing resources."
      }, {
        text: `Create an instance.`,
        link: null,
        image: "create-instance-options.png",
        image_alt: "Two ways to create IBM quantum compute instance. First: clicking the create instance button in the welcome pop-up. Second: clicking the create instance button from the dashboard's top-right corner."
      }, {
        text: `Now, get your access token (API key). Go to IAM settings > API Keys. And the click the blue "Create" button.`,
        desc: "The below link will direct you there if you're signed in.",
        link: "https://cloud.ibm.com/iam/apikeys",
        image: "create-api-key-page.png",
        image_alt: "Click the Create button from the dashboard.",
      }, {
        text: `In the creation pop-up, type the name of your key (any name is fine). You don't have to configure the rest. Do not close the page once you click the "Create" button.`,
        link: null,
        image: "api-key-creation-window.png",
        image_alt: "Create IBM Cloud API key window with the name configured.",
      }, {
        text: `<strong>[Important] This your only chance to save your access token!</strong> Click copy or download (you can do both) to save it.`,
        link: null,
        image: "saving-api-key.png",
        image_alt: "A pop-up window for saving the created API key.",
      }, {
        text: `[Option 1] Save your API key as an environment variable.`,
        desc: 'This will work best if you are an experienced developer. The variable name is up to you.',
        link: null,
        image: null,
        image_alt: null
      }, {
        text: `[Option 2] Save credentials using <code>QiskitRuntimeService</code>. You will have to install this library using pip.`,
        desc: 'This is included in our test code notebook.',
        link: null,
        image: null,
        image_alt: null,
        code: `QiskitRuntimeService.save_account(token="<your-api-key-here>", overwrite=True)`
      }, {
        text: `[Option 3] Save credentials as a file in a directory for this tutorial (your choice).`,
        desc: 'Recommended for beginners. Save it as `credentials.txt` in your directory.',
        link: null,
        image: null,
        image_alt: null
      },
    ]
  }, {
    id: "install",
    title: "Install required packages",
    desc: null,
    steps: [{
      text: "Install python! When you open a terminal and type <code>python</code>, you should be seeing Python 3.12+.",
      desc: "This tutorial will use 3.12.",
      link: 'https://www.python.org/downloads/',
      image: null,
      image_alt: null,
    }, {
      text: "If you are familiar with virtual environment, consider doing it. To do so, locate a preferred run: ",
      link: null,
      image: null,
      image_alt: null,
      code: `# mac
python3.12 -m venv .hqci-tutorial
source .hqci-tutorial/bin/activate

# windows
py -3.12 -m venv .hqci-tutorial
.hqci-tutorial/bin/activate.bat`
    }, {
      text: "Install Jupyter Lab—we're going to use this for the tutorial.",
      link: null,
      image: null,
      image_alt: null,
      code: `pip install jupyterlab`
    }, {
      text: `You will need to install <code>qiskit</code>, <code>matplotlib</code>, <code>qiskt[visualization]</code>, <code>qiskit-ibm-runtime</code>, <code>qiskit_aer</code>, <code>revkit</code>.`,
      // do we need numpy?
      link: null,
      image: null,
      image_alt: null,
      code: `pip install qiskit
pip install matplotlib
pip install 'qiskit[visualization]'
pip install qiskit-ibm-runtime
pip install qiskit_aer
pip install revkit`
    },]
  }, {
    id: "run-test",
    title: "Run the test code",
    desc: null,
    steps: [{
      text: "Download this notebok with template codes to the same location of your virtual environment, and run the notebook cell by cell. If you don't encounter any issue, you're good to go!",
      desc: `<a href="./notebooks/hqci-tutorial-prep-code.html" target="_blank">Preview</a>`,
      link: null,
      download: './notebooks/hqci-tutorial-prep-code.ipynb',
      image: null,
      image_alt: null,
      code: `# to run it on a jupyter lab, locate your directory and run: 
jupyter lab`
    }, {
      text: "At the end, your directory should look like this.",
      link: null,
      image: null,
      image_alt: null,
      code: `.
├── .hqci-tutorial
├── .ipynb_checkpoints
├── credential.txt # optional
└── hqci-tutorial-prep-code.ipynb
`
    },]
  }, {
    id: "troubleshoot",
    title: "Troubleshoot",
    desc: null,
    steps: [
      {
        text: 'For IBM account, please contact IBMid.',
        link: null,
        image: null,
        image_alt: null
      },
      {
        text: 'If you have other questions, please let us know via this form: ',
        link: 'https://forms.gle/85RSH3YfdD8QTKMUA',
        image: null,
        image_alt: null
      }
    ]
  }
]