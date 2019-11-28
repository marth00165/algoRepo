require 'pry'
def wholikesjawn(arr)

  if arr.length == 0
     "no one likes this"
  elsif arr.length == 1
     "#{arr[0]} likes str"
  elsif arr.length == 2
     "#{arr[0]} and #{arr[1]} like string"
  elsif arr.length == 3
     "#{arr[0]}, #{arr[1]} and #{arr[2]} like string"
  elsif arr.length > 3
    arr2 = arr
    arr2.delete_at(0)
    arr2.delete_at(1)
     "#{arr[0]}, #{arr[1]} and #{arr2.length} others like string"
  end

  end


  wholikesjawn(["Alex", "Jacob", "Mark", "Max"] )

  binding.pry
  0
