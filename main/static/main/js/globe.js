function initializeGlobe() {

    let viewer = new Cesium.Viewer('map', {
        animation: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        homeButton: false,
        geocoder: false,
        skyBox: false,
        skyAtmosphere: false,
        contextOptions: {
            webgl: {
                alpha: true
            },
        },
        fullscreenButton: false,
        imageryProvider: new Cesium.UrlTemplateImageryProvider({
            url: 'https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=AR809fUIXzSnMiNkx8T3',
            tileWidth: 512,
            tileHeight: 512,
            // credit: new Cesium.Credit("\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e", true)
        }),
        timeline: false
    });
    viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT;
    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(78.9629, 20.5937, 17000000)
    });

    // Add marker for IIT Guwahati
    viewer.entities.add({
        id: "iitg",
        position: Cesium.Cartesian3.fromDegrees(91.69162631534233, 26.188925089922495),
        billboard: {
            image: '/static/main/images/globe-logos/logo-iitg.svg',
            width: 30,
            height: 30
        },
        name: "Centre for Nanotechnology, Indian Institute of Technology Guwahati",
        description: `
        <div style="display:flex;flex-direction:column;align-items:center">
        <div>
            <h2 style="text-align:center">Centre for Nanotechnology</h2><hr>
        <div>
        <div style="width:50%;margin:auto;display:flex;flex-direction:column;align-items:center">
            <img src="/static/main/images/globe-logos/cfn-logo.svg" style="width:100%">
        </div>
        <div style="text-align:justify">
            <p>Established in the year 2004 Centre for Nanotechnology,IITG possesses a vision to foster the development of 
            research and education in the multi-disciplinary area of Nanotechnology at IIT Guwahati,to develop human resources 
            gifted with leading-edge competitive advantages in the multi-disciplinary area of Nanotechnology required for meeting 
            the future challenges, to augment academic partnerships with industry in the area of Nanotechnology.<p>
        <div>
        <div style="display:flex;justify-content:center">
            <a href="https://iitg.ac.in/nano/" target="_blank" style="border-radius:3px;padding:5px 10px;text-decoration:none;color:rgb(0,0,0);background:rgb(250,250,250)">Visit Us</a>
        </div>
        `
    });

    // Add marker for IIT Delhi

    viewer.entities.add({
        id: "iitd",
        position: Cesium.Cartesian3.fromDegrees(77.19242457726128, 28.54673585152059),
        billboard: {
            image: '/static/main/images/globe-logos/logo-iitd.svg',
            width: 30,
            height: 30
        },
        name: "Indian Institute of Technology Delhi",
        description: `
        <div style="display:flex;flex-direction:column;align-items:center">
        <div>
            <h2 style="text-align:center">Indian Institute of Technology Delhi</h2><hr>
        <div>
        <div style="width:50%;margin:auto;display:flex;flex-direction:column;align-items:center">
            <img src="/static/main/images/globe-logos/logo-iitd.svg" style="width:100%">
        </div>
        <div style="text-align:justify">
            <p>Indian Institute of Technology Delhi is one of the 23 IITs created to be Centres of Excellence for training, 
            research and development in science, engineering and technology in India.<p>
            <p>Established as College of Engineering in 1961, the Institute was later declared as an Institution of National 
            Importance under the “Institutes of Technology (Amendment) Act, 1963” and was renamed as “Indian Institute of Technology Delhi”. 
            It was then accorded the status of a Deemed University with powers to decide its own academic policy, to conduct its own examinations, 
            and to award its own degrees.</p>
        <div>
        <div style="display:flex;justify-content:center">
            <a href="https://home.iitd.ac.in/" target="_blank" style="border-radius:3px;padding:5px 10px;text-decoration:none;color:rgb(0,0,0);background:rgb(250,250,250)">Visit Us</a>
        </div>
        `
    });


    // Add marker for IIT Kharagpur

    viewer.entities.add({
        id: "iitkgp",
        position: Cesium.Cartesian3.fromDegrees(87.31070276136937, 22.315205309864975),
        billboard: {
            image: '/static/main/images/globe-logos/logo-iitkgp.svg',
            width: 30,
            height: 30
        },
        name: "Indian Institute of Technology Kharagpur",
        description: `
        <div style="display:flex;flex-direction:column;align-items:center">
        <div>
            <h2 style="text-align:center">Indian Institute of Technology Kharagpur</h2><hr>
        <div>
        <div style="width:50%;margin:auto;display:flex;flex-direction:column;align-items:center">
            <img src="/static/main/images/globe-logos/logo-iitkgp.svg" style="width:100%">
        </div>
        <div style="text-align:justify">
            <p>The history of the IIT system dates back to 1946 when a committee was set up by 
            Hon'ble Sir Jogendra Singh, Member of the Viceroy's Executive Council, Department of Education, 
            Health and Agriculture to consider the setting up of Higher Technical Institutions for post war 
            industrial development in India. The 22 member committee headed by Sri N.R.Sarkar, in its report, 
            recommended the establishment of four Higher Technical Institutions in the Eastern, Western, Northern 
            and Southern regions, possibly on the lines of the Massachusetts Institute of Technology, USA, with a 
            number of secondary institutions affiliated to it. The report also urged the speedy establishment of all 
            the four institutions with the ones in the East and the West to be started immediately. The committee also 
            felt that such institutes would not only produce undergraduates but they should be engaged in research, producing 
            research workers and technical teachers as well. The standard of the graduates should be at par with those from first 
            class institutions abroad. They felt that the proportion of undergraduates and postgraduate students should be 2:1. <p>

            <p>With the above recommendations of the Sarkar committee in view, the first Indian Institute of Technology was born 
            in May 1950 in Hijli, Kharagpur, in the eastern part of India. Initially the IIT started functioning from 5, 
            Esplanade East, Calcutta and very soon shifted to Hijli in Sept. 1950. The present name 'Indian Institute of Technology' 
            was adopted before the formal inauguration of the Institute on August 18, 1951, by Maulana Abul Kalam Azad. IIT Kharagpur 
            started its journey in the old Hijli Detention Camp where some of our great freedom fighters toiled and sacrificed their 
            lives for the independence of our country. The history of IIT Kharagpur is thus intimately linked with the history of the 
            Hijli Detention Camp. This is possibly one of the very few Institutions all over the world which started life in a prison 
            house. </p>
    
        <div>
        <div style="display:flex;justify-content:center">
            <a href="http://www.iitkgp.ac.in/" target="_blank" style="border-radius:3px;padding:5px 10px;text-decoration:none;color:rgb(0,0,0);background:rgb(250,250,250)">Visit Us</a>
        </div>
        `
    });

    // Add marker for IIT Bombay

    viewer.entities.add({
        id: "iitb",
        position: Cesium.Cartesian3.fromDegrees(72.91313915397296, 19.134443812057572),
        billboard: {
            image: '/static/main/images/globe-logos/logo-iitb.svg',
            width: 30,
            height: 30
        },
        name: "Nanofabrication Facility, Indian Institute of Technology Bombay",
        description: `
        <div style="display:flex;flex-direction:column;align-items:center">
        <div>
            <h2 style="text-align:center">Nanofabrication Facility</h2><hr>
        <div>
        <div style="width:50%;margin:auto;display:flex;flex-direction:column;align-items:center">
            <img src="/static/main/images/globe-logos/logo-iitbnf.png" style="width:100%">
        </div>
        <div style="text-align:justify">
            <p>The IIT-Bombay Nanofabrication Facility (IITBNF) is a state-of-the-art semiconductor 
            device technology and nanotechnology research facility which consists of over 15 laboratories 
            under its umbrella. It is housed in the Department of Electrical Engineering (EE) – one of the 
            main drivers of Microelectronics research activity in India. IITBNF grew in concept, structure 
            and function from the various projects and labs that were established here since the 1980s.<p>

        <div>
        <div style="display:flex;justify-content:center">
            <a href="http://iitbnf.iitb.ac.in/iitbnf/" target="_blank" style="border-radius:3px;padding:5px 10px;text-decoration:none;color:rgb(0,0,0);background:rgb(250,250,250)">Visit Us</a>
        </div>
        `
    });


    // Add marker for IIT Madras

    viewer.entities.add({
        id: "iitm",
        position: Cesium.Cartesian3.fromDegrees(80.23347612328828, 12.992371052483138),
        billboard: {
            image: '/static/main/images/globe-logos/logo-iitm.svg',
            width: 30,
            height: 30
        },
        name: "Indian Institute of Technology Madras",
        description: `
        <div style="display:flex;flex-direction:column;align-items:center">
        <div>
            <h2 style="text-align:center">Indian Institute of Technology Madras</h2><hr>
        <div>
        <div style="width:50%;margin:auto;display:flex;flex-direction:column;align-items:center">
            <img src="/static/main/images/globe-logos/logo-iitm.svg" style="width:100%">
        </div>
        <div style="text-align:justify">
            <p>In 1956, the German Government offered technical assistance for establishing an institute 
            of higher education in engineering in India. The first Indo-German agreement in Bonn, West 
            Germany for the establishment of the Indian Institute of Technology at Madras was signed in 
            1959.<p>
            <p>The Institute was formally inaugurated in 1959 by Prof. Humayun Kabir, Union Minister for 
            Scientific Research and Cultural Affairs. The IIT system has sixteen Institutes of Technology – 
            the first of these to be instituted were at Kharagpur (estb. 1951), Mumbai (estb. 1958), Chennai 
            (estb. 1959), Kanpur (estb. 1959), Delhi (estb. 1961), Guwahati (estb. 1994) and Roorkee (estb. 1847, 
                joined IITs in 2001).</p>

        <div>
        <div style="display:flex;justify-content:center">
            <a href="https://www.iitm.ac.in/" target="_blank" style="border-radius:3px;padding:5px 10px;text-decoration:none;color:rgb(0,0,0);background:rgb(250,250,250)">Visit Us</a>
        </div>
        `
    });


    // Add marker for IISC Bangalore

    viewer.entities.add({
        id: "iisc",
        position: Cesium.Cartesian3.fromDegrees(77.56692772328829, 13.022486875301867),
        billboard: {
            image: '/static/main/images/globe-logos/logo-iisc.svg',
            width: 30,
            height: 30
        },
        name: "Indian Institute of Science Bangalore",
        description: `
        <div style="display:flex;flex-direction:column;align-items:center">
        <div>
            <h2 style="text-align:center">Centre for Nano Science and Engineering (CeNSE)</h2><hr>
        <div>
        <div style="width:50%;margin:auto;display:flex;flex-direction:column;align-items:center">
            <img src="/static/main/images/globe-logos/logo-cense.png" style="width:100%">
        </div>
        <div style="text-align:justify">
            <p>The Centre for Nano Science and Engineering (CeNSE) was established in 2010 to pursue 
            interdisciplinary research across several disciplines with a focus on nanoscale systems. 
            Current research topics include, but are not limited to nanoelectronics, MEMS/NEMS, 
            nanomaterials and devices, photonics, nano-biotechnology, solar cells and computational 
            nano-engineering.<p>
            <p>Apart from the regular faculty members at CeNSE, almost 40 faculty members from different 
            departments at IISc are associated in the academic and research activities at the centre. 
            The centre offers PhD programs in a wide range of areas, and has close interactions with the 
            industry. A state-of-the art nanofabrication facility with a clean room spanning 1400 square 
            meters is located at the centre. In addition, there are several characterization labs that 
            cater to material, electronic, mechanical, chemical and optical characterization.</p>

        <div>
        <div style="display:flex;justify-content:center">
            <a href="http://www.cense.iisc.ac.in/" target="_blank" style="border-radius:3px;padding:5px 10px;text-decoration:none;color:rgb(0,0,0);background:rgb(250,250,250)">Visit Us</a>
        </div>
        `
    });

};