package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WikiResultsPage{
    
    private WebDriver Driver;
    
    public WikiResultsPage(WebDriver driver)
    {
        Driver = driver;
        WebDriverWait wait = new WebDriverWait(Driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("firstHeading")));
    }
    
    public String GetFirstHeading() {
    	
    	WebElement firstHeading = Driver.findElement(By.id("firstHeading"));
    	String uIHeading = firstHeading.getText().toLowerCase();
    	return uIHeading;
    }
    
    public boolean IsCorrectHeadingDisplayed(String heading) {
    	
    	boolean displayed = false;
    	WebElement firstHeading = Driver.findElement(By.id("firstHeading"));
    	String uIHeading = firstHeading.getText().toLowerCase();
    	System.out.println(uIHeading);
    	System.out.println(heading);
    	if (uIHeading == "")//heading.toLowerCase())
    		displayed = true;
    	return displayed;
    }
    
    //public String GetOtherLanguageLinkText()
    
    public boolean IsOtherLanguageLinkDisplayed(String language) {
    	
    	WebDriverWait wait = new WebDriverWait(Driver, 10);
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By
    			.xpath("//ul/li[@class[contains(.,'interlanguage-link')]]/a[text()='" + language +"']")));
    	WebElement otherLanguage = Driver.findElement(By
    			.xpath("//ul/li[@class[contains(.,'interlanguage-link')]]/a[text()='" + language +"']"));
    	return otherLanguage.isDisplayed();
    }
    
    public void  ClickOtherLanguageLink(String language) {
    	
    	WebElement otherLanguage = Driver.findElement(By
    			.xpath("//ul/li[@class[contains(.,'interlanguage-link')]]/a[text()='" + language +"']"));
    	otherLanguage.click();
    }
    
    public boolean IsEnglishLanguageLinkDisplayed(String language) {
    	
    	WebDriverWait wait = new WebDriverWait(Driver, 10);
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By
    			.xpath("//ul/li[@class[contains(.,'interlanguage-link')]]/a[text()='" + language +"']")));
    	WebElement englishLanguage = Driver.findElement(By
    			.xpath("//ul/li[@class[contains(.,'interlanguage-link')]]/a[text()='" + language +"']"));
    	return englishLanguage.isDisplayed();
    }
}
