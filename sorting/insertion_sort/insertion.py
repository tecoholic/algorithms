# Python 2.7

def insertion_simple(A):
    print "Input: %s\n" % A
    swaps = 0

    i = 1
    while i < len(A):
        j = i
        while j > 0 and A[j-1] > A[j]:
            dummy = A[j]
            A[j] = A[j-1]
            A[j-1] = dummy
            j = j-1

            swaps += 1
            print "Swap %s: %s" % (swaps, A)
        i = i + 1
    print "\nOutput: %s" % A

def insertion_optimised(A):
    print "Input: %s\n" % A
    swaps = 0

    i = 1
    while i < len(A):
        dummy = A[i]
        j = i - 1

        while j >= 0 and A[j] > dummy:
            A[j+1] = A[j]
            j = j-1
            swaps += 1
            print "Swap %s: %s" % (swaps, A)

        A[j+1] = dummy
        i = i + 1
    print "\nOutput: %s" % A


if __name__ == '__main__':
    A = [7,6,5,4,3,2,1]
    insertion_simple(A)
    # insertion_optimised(A)