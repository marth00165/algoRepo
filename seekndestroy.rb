




puts " Parameters :
  You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
  Remove all elements from the initial array that are of the same value as these arguments.

  Example

  seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]) should return [1]
  seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]) should return [1, 5, 1] "


puts ""
puts ""


puts "Enter First set of numbers Seperate by comma"
  j = gets.chomp.split(",")
puts "Enter Second set of numbers Seperate by comma"
  p = gets.chomp.split(",")

  f = []
  k = []


j.each do |number|
  f << number.to_i
end

p.each do |number|
  k << number.to_i
end




def seekndestroy(a,b)

  arr1 = a
  arr2 = b

  arr2.each do |l|
    if arr1.include?(l)
      arr1.delete(l)
    end
  end
  puts arr1
end

seekndestroy(f,k)
