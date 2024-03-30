--Arithmetic Operators

DECLARE @A INT = 20
DECLARE @B INT = 20
DECLARE @C INT = @A + @B
DECLARE @D INT = @A - @B
DECLARE @M INT = @A * @B
DECLARE @Div INT = @A / @B
DECLARE @Mod FLOAT = @A % @B
SELECT @A AS A, @B AS B, @C AS [SUM], @D AS [Difference], @M AS [Multiplication],@Div AS [Division], @Mod AS [Modulation]

--Comparision Operators
DECLARE @NUM1 INT = 10
DECLARE @NUM2 INT = 20
IF(@NUM1 > @NUM2)
	PRINT 'NUM1 is Larger Then NUM2'
ELSE
	PRINT 'NUM1 is Smaller Then NUM2'

IF(@NUM1 < @NUM2)
	PRINT 'NUM1 is Smaller Then NUM2'
ELSE
	PRINT 'NUM1 is Larger Then NUM2'

IF(@NUM1 <> @NUM2) --NOT EQUAL
	PRINT 'NUM1 and NUM2 are Not Equal'
ELSE
	PRINT 'NUM1 and NUM2 are Equal'

IF(@NUM1 >= @NUM2)
	PRINT 'NUM1 is Larger or Equal to NUM2'
ELSE
	PRINT 'NUM1 is not Larger or equal to NUM2'

IF(@NUM1 <= @NUM2)
	PRINT 'NUM1 is Smaller or Equal to NUM2'
ELSE
	PRINT 'NUM1 is not Smaller or equal to NUM2'

IF(@NUM1 != @NUM2)
	PRINT 'NUM1 is Not Equal to NUM2'
ELSE
	PRINT 'NUM1 is Equal to NUM2'

IF(@NUM1 !> @NUM2)
	PRINT 'NUM1 is Not Greater Than NUM2'
ELSE
	PRINT 'NUM1 is Greater Than NUM2'

IF(@NUM1 !< @NUM2)
	PRINT 'NUM1 is Not Less Than NUM2'
ELSE
	PRINT 'NUM1 is Less Than NUM2'