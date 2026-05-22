import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
import re

def scrape_tn_press_releases():
    """
    Scrape press releases from Tamil Nadu government website for today's date
    """
    url = "https://www.tn.gov.in/press_release.php"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Get today's date in the format used on the website (e.g., "May 22 ,2026")
        today = datetime.now()
        today_date_str = today.strftime("%B %d ,%Y")  # Format: May 22 ,2026
        
        press_releases = []
        
        # Find all press release list items
        pr_items = soup.find_all('li', class_='pr-list-group-item')
        
        for item in pr_items:
            # Extract date from the tag-label span
            date_span = item.find('span', class_='tag-label')
            if not date_span:
                continue
                
            date_text = date_span.get_text(strip=True)
            
            # Check if this is today's date
            if today_date_str in date_text:
                # Extract title from the paragraph with class 'list-group-item-text'
                title_elem = item.find('p', class_='list-group-item-text')
                title = title_elem.get_text(strip=True) if title_elem else "No title"
                
                # Extract all links (images and PDFs)
                links = []
                all_links = item.find_all('a', href=True)
                
                main_link = None
                pdf_links = []
                additional_links = []
                
                for link in all_links:
                    href = link.get('href')
                    if href and 'press_release' in href:
                        if href.endswith('.pdf'):
                            pdf_links.append(href)
                        else:
                            additional_links.append(href)
                            if not main_link:
                                main_link = href
                
                # Use PDF link if available, otherwise use main link
                primary_link = pdf_links[0] if pdf_links else main_link
                
                # Determine department based on title content
                dept = determine_department(title)
                
                # Extract press release number if available
                pr_number = None
                pr_number_link = item.find('a', string=re.compile(r'Press Release No:'))
                if pr_number_link:
                    pr_number = pr_number_link.get_text(strip=True).replace('Press Release No:', '')
                
                press_release = {
                    "title": title,
                    "date": today_date_str,
                    "primary_link": primary_link,
                    "all_links": {
                        "main": main_link,
                        "pdfs": pdf_links,
                        "images": additional_links
                    },
                    "dept": dept,
                    "press_release_number": pr_number
                }
                
                press_releases.append(press_release)
        
        return {
            "status": "success",
            "date": today_date_str,
            "total_releases": len(press_releases),
            "press_releases": press_releases
        }
        
    except requests.RequestException as e:
        return {
            "status": "error",
            "message": f"Failed to fetch data: {str(e)}",
            "press_releases": []
        }
    except Exception as e:
        return {
            "status": "error",
            "message": f"An unexpected error occurred: {str(e)}",
            "press_releases": []
        }

def determine_department(title):
    """
    Determine the department based on keywords in the title
    """
    title_lower = title.lower()
    
    # Check for Chief Minister related content
    if any(term in title_lower for term in ['chief minister', 'honble chief minister', 'cm ', 'cmo']):
        return "CMO"
    
    # Check for specific departments
    department_keywords = {
        "Health": ['health', 'medical', 'hospital', 'family welfare'],
        "Education": ['school education', 'education', 'sslc', 'library'],
        "Forests": ['forest', 'environment'],
        "Revenue": ['revenue', 'disaster management'],
        "Public Works": ['public works', 'sports development'],
        "Housing": ['housing', 'urban development'],
        "Labour": ['labour', 'skill development', 'employment'],
        "Food and Civil Supplies": ['food', 'civil supplies', 'warehousing'],
        "Co-operation": ['co-operation', 'cooperation'],
        "Water Resources": ['water resources', 'irrigation'],
        "Electricity": ['electricity', 'energy'],
        "Adi Dravidar and Tribal Welfare": ['adi dravidar', 'tribal welfare'],
        "Information and Publicity": ['information', 'publicity', 'tamil development']
    }
    
    for dept, keywords in department_keywords.items():
        if any(keyword in title_lower for keyword in keywords):
            return dept
    
    return "General"

# Run the scraper and print JSON output
if __name__ == "__main__":
    result = scrape_tn_press_releases()
    print(json.dumps(result, indent=2, ensure_ascii=False))