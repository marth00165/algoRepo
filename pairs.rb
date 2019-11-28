def pairs (k, arr)
  counter = 0
  arr.each do |x|
    arr.each do |y|
      if x - y == k
        counter += 1
      end
    end
  end
puts counter

end
k = 1
arr = [1,2,3,4,5]
pairs(k, arr)
