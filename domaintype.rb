

a = []
puts "Enter your list of emails seperated with commas!"
a = gets.chomp.split(",")

def domaintype(domains)
    jawn = []
    arr = domains
    arr.each do |domain|
      if domain.include?(".org")
        jawn << "organization"
      elsif domain.include?(".com")
        jawn << "commercial"
      elsif domain.include?(".net")
        jawn << "network"
      elsif domain.include?(".info")
        jawn << "info"
      end
    end

    puts jawn

end

domaintype(a)
