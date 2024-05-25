import Page from 'pageobjects/page.page';

class DashboardPage extends Page{
    get dashboardPageElement(){
        return $('//h3[contains(text(),"kasirAja")]')
    }

    get btnPelanggan(){
        return $("//a[@href='/customers']//div[@class='css-1xhj18k']")
    }

    get btnAddPelanggan(){
        return $("//a[normalize-space()='tambah']")
    }

    get namaInput(){
        return $('#nama')
    }

    get noHpInput(){
        return $('//*[@id="no.hp"]')
    }

    get alamatInput(){
        return $('#alamat')
    }

    get keteranganInput(){
        return $('#keterangan')
    }
    
    get btnSimpan(){
        return $("//button[normalize-space()='simpan']")
    }

    get message(){
        return $('//*[@id="toast-4-title"]')
    }

    get errorMsg(){
        return $("//div[@role='alert']")
    }


}

module.exports = new DashboardPage();