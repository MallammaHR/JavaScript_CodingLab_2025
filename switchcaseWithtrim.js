let broswer = '   chrome  ';
switch (broswer.trim().toLocaleLowerCase())
 {
    case 'edge':
        console.log('lunch edge browser');
        break;
    case 'firefox':
        console.log('launch firefox browser');
        break;
    case 'opera':
        console.log('launch the oper browser');
        break;
    case 'chrome':
        console.log('launch the chrome browser');
        break;
    default:
        console.log('plz pass the right browser : '+browser);
        break;
}