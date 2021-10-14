function globeInitialize() {
    let options = {
        center: [20.5937, 78.9629],
        zoom: 2,
    };
    let earth = new WE.map('globe', options);
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(earth);


    let iitg_marker = WE.marker([26.189206324270312, 91.69152328893051]).addTo(earth);
    iitg_marker.bindPopup(`
    <div style="display:flex;align-items:center;">
        <div style="flex:1;padding:5px;">
            <img src="static/main/images/insti-1.png" style="width:100%;">
        </div>
        <a href="https://iitg.ac.in/nano/" target="_blank" style="flex:3.5">
            <h3 style="text-align:center">
                Centre for Nanotechnology, Indian Institute of Technology Guwahati
            </h3>
        </a>
    </div>
    `);

    let iitd_marker = WE.marker([28.54630830374026, 77.19267620109034]).addTo(earth);
    iitd_marker.bindPopup(`
    <div style="display:flex;align-items:center;">
        <div style="flex:1;padding:5px;">
            <img src="static/main/images/insti-6.png" style="width:100%;">
        </div>
        <a href="https://home.iitd.ac.in/" target="_blank" style="flex:3.5">
            <h3 style="text-align:center">
                Indian Institute of Technology Delhi
            </h3>
        </a>
    </div>
    `);



    let iitb_marker = WE.marker([19.133561956974226, 72.91322498256692]).addTo(earth);
    iitb_marker.bindPopup(`
    <div style="display:flex;align-items:center;">
        <div style="flex:1;padding:5px;">
            <img src="static/main/images/insti-4.png" style="width:100%;">
        </div>
        <a href="http://iitbnf.iitb.ac.in/iitbnf/" target="_blank" style="flex:3.5">
            <h3 style="text-align:center">
                Nanofabrication Facility, Indian Institute of Technology Bombay
            </h3>
        </a>
    </div>
    `);

    let iitkgp_marker = WE.marker([22.31563746799964, 87.3110648695337]).addTo(earth);
    iitkgp_marker.bindPopup(`
    <div style="display:flex;align-items:center;">
        <div style="flex:1;padding:5px;">
            <img src="static/main/images/insti-2.png" style="width:100%;">
        </div>
        <a href="http://www.iitkgp.ac.in/" target="_blank" style="flex:3.5">
            <h3 style="text-align:center">
                Indian Institute of Technology Kharagpur
            </h3>
        </a>
    </div>
    `);

    let iitm_marker = WE.marker([12.992312229174791, 80.2334823587384]).addTo(earth);
    iitm_marker.bindPopup(`
    <div style="display:flex;align-items:center;">
        <div style="flex:1;padding:5px;">
            <img src="static/main/images/insti-3.png" style="width:100%;">
        </div>
        <a href="https://www.iitm.ac.in/" target="_blank" style="flex:3.5">
            <h3 style="text-align:center">
                Indian Institute of Technology Madras
            </h3>
        </a>
    </div>
    `);


    let iisc_marker = WE.marker([13.017149900444409, 77.5671235843536]).addTo(earth);
    iisc_marker.bindPopup(`
    <div style="display:flex;align-items:center;">
        <div style="flex:1;padding:5px;">
            <img src="static/main/images/insti-5.png" style="width:100%;">
        </div>
        <a href="http://www.cense.iisc.ac.in/" target="_blank" style="flex:3.5">
            <h3 style="text-align:center">
            Centre for Nano Science and Engineering (CeNSE), Indian Institute of Science
            </h3>
        </a>
    </div>
    `);
}